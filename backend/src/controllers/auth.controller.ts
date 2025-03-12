import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import mongoose from 'mongoose'
import User from '../models/User'
import Role from '../models/Role'
import { AuthenticatedRequest } from '../middlewares/auth.middleware'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import speakeasy from 'speakeasy'
import { google } from 'googleapis'
import { isTokenRevoked, revokeToken } from '../utils/tokenBlacklist'
import { sendEmail } from '../utils/sendEmail'

// Google OAuth2 Client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.CLIENT_URL + '/auth/google/callback'
)

// Generate JWT Tokens
const generateTokens = async (user: any) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '15m' }
  )

  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.REFRESH_SECRET as string,
    { expiresIn: '7d' }
  )

  return { accessToken, refreshToken }
}

// ✅ Register with Email Verification
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, password } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
      return
    }

    // Check if email exists
    const existingUser = await User.findOne({ email }).exec()
    if (existingUser) {
      res.status(400).json({ message: 'Email already in use' })
      return
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Determine role
    const userCount = await User.countDocuments()
    let role =
      userCount === 0
        ? (await Role.findOne({ name: 'superadmin' })) ??
          (await Role.create({ name: 'superadmin' }))
        : (await Role.findOne({ name: 'user' })) ??
          (await Role.create({ name: 'user' }))

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString('hex')

    const newUser = new User({
      uid: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
      role: role._id,
      isVerified: false,
      verificationToken,
    })

    await newUser.save()

    // Send Verification Email
    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`

    const emailHtml = `
      <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; color: #333; background-color: #f9f9f9; border-radius: 8px;">
        <div style="text-align: center; padding-bottom: 20px;">
          <img src="https://yourcompany.com/logo.png" alt="Tetemeko Media Logo" style="max-width: 150px;">
        </div>
        <h2 style="text-align: center; color: #222;">Welcome to Tetemeko Media, ${name}! 🎉</h2>
        <p style="font-size: 16px; line-height: 1.6; text-align: center;">
          Thank you for signing up. Please verify your email address to activate your account.
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationLink}" style="display: inline-block; background-color: #007bff; color: #ffffff; padding: 12px 20px; font-size: 16px; text-decoration: none; border-radius: 5px;">
            Verify My Email
          </a>
        </div>
        <p style="font-size: 14px; line-height: 1.6; text-align: center; color: #666;">
          If you didn’t request this, you can safely ignore this email.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="font-size: 12px; text-align: center; color: #999;">
          Need help? Contact our support at 
          <a href="mailto:support@tetemekomedia.com" style="color: #007bff;">support@tetemekomedia.com</a>
        </p>
      </div>
    `

    console.log('SMTP Config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? '✔ Hidden' : '❌ Missing',
    })

    await sendEmail(email, 'Verify Your Email', emailHtml)

    res
      .status(201)
      .json({
        message: 'User registered successfully. Verification email sent.',
      })
  } catch (err: any) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ message: err.message })
    }
    next(err)
  }
}

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.query // Use req.query instead of req.params
    if (!token) {
      res.status(400).json({ message: 'Token is required' })
      return
    }

    const user = await User.findOne({ verificationToken: token }).exec()
    console.log('User found:', user) // Debugging log

    if (!user) {
      res.status(400).json({ message: 'Invalid token' })
      return
    }

    // Optional: Check token expiry
    if (
      user.verificationTokenExpires &&
      user.verificationTokenExpires < new Date()
    ) {
      res.status(400).json({ message: 'Verification token expired' })
      return
    }

    user.isVerified = true
    user.verificationToken = undefined
    await user.save()

    res.json({ message: 'Email verified successfully' })
  } catch (err) {
    next(err)
  }
}

// ✅ Login with Account Lockout & MFA
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, otp } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() })
      return
    }

    const user = await User.findOne({ email }).populate('role').exec()
    if (!user) {
      res.status(401).json({ message: 'Invalid credentials' })
      return
    }

    if (!user.isVerified) {
      res.status(403).json({ message: 'Email not verified' })
      return
    }

    user.failedLoginAttempts = user.failedLoginAttempts ?? 0

    if (user.failedLoginAttempts >= 5) {
      res.status(403).json({ message: 'Account locked. Reset password' })
      return
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      user.failedLoginAttempts += 1
      await user.save()
      res.status(401).json({ message: 'Invalid credentials' })
      return
    }

    // Reset failed attempts after successful login
    user.failedLoginAttempts = 0
    await user.save()

    if (user.mfaEnabled) {
      if (!otp) {
        res.status(400).json({ message: 'OTP required for 2FA' })
        return
      }

      const verified = speakeasy.totp.verify({
        secret: user.mfaSecret ?? '',
        encoding: 'base32',
        token: otp,
      })

      if (!verified) {
        res.status(401).json({ message: 'Invalid OTP' })
        return
      }
    }

    const { accessToken, refreshToken } = await generateTokens(user)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.status(200).json({ accessToken })
  } catch (err) {
    next(err)
  }
}

// ✅ OAuth Google Login
export const googleAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { tokenId } = req.body

    if (!tokenId) {
      res.status(400).json({ message: 'Token ID is required' })
      return
    }

    const { data } = await google
      .oauth2('v2')
      .userinfo.get({ auth: oauth2Client })

    if (!data || !data.email) {
      res.status(400).json({ message: 'Invalid Google token' })
      return
    }

    let user = await User.findOne({ email: data.email }).exec()

    if (!user) {
      let userRole = await Role.findOne({ name: 'user' }).exec()
      if (!userRole) {
        userRole = await Role.create({ name: 'user' })
      }

      user = new User({
        uid: new mongoose.Types.ObjectId(),
        name: data.name,
        email: data.email,
        password: crypto.randomBytes(20).toString('hex'),
        role: userRole._id,
        isVerified: true,
      })

      await user.save()
    }

    const { accessToken, refreshToken } = await generateTokens(user)

    res.status(200).json({ accessToken, refreshToken })
  } catch (err) {
    next(err)
  }
}

// ✅ Enable MFA
export const enableMFA = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (!req.user?.id) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    const secret = speakeasy.generateSecret()

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { mfaSecret: secret.base32, mfaEnabled: true },
      { new: true }
    )

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    res.json({ secret: secret.otpauth_url })
  } catch (err) {
    next(err)
  }
}

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    // Generate a secure reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = new Date(Date.now() + 10 * 60 * 1000)
    await user.save()

    // Send Reset Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    })

    const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`
    const mailOptions = {
      to: email,
      subject: 'Password Reset Request',
      text: `Click the link to reset your password: ${resetUrl}. It expires in 10 minutes.`,
      html: `<p>Click the link below to reset your password. This link expires in 10 minutes:</p><p><a href="${resetUrl}">${resetUrl}</a></p>`,
    }

    await transporter.sendMail(mailOptions)

    res.json({ message: 'Password reset link sent to your email.' })
  } catch (err) {
    next(err)
  }
}

// ✅ Reset Password - Verifies Token & Updates Password
export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { token } = req.params
    const { newPassword } = req.body

    const user = await User.findOne({ resetPasswordToken: token })

    if (
      !user ||
      !user.resetPasswordExpires ||
      user.resetPasswordExpires.getTime() < Date.now()
    ) {
      res.status(400).json({ message: 'Invalid or expired token' })
      return
    }

    // Hash new password & update user
    user.password = await bcrypt.hash(newPassword, 10)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    res.json({ message: 'Password reset successfully. You can now log in.' })
  } catch (err) {
    next(err)
  }
}

export const refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { refreshToken } = req.cookies
    if (!refreshToken) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }

    // ✅ Check if the refresh token is blacklisted
    if (isTokenRevoked(refreshToken)) {
      res.status(403).json({ message: 'Invalid or expired token' })
      return
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET as string
    ) as { id: string }
    const user = await User.findById(decoded.id)

    if (!user || user.refreshToken !== refreshToken) {
      res.status(403).json({ message: 'Invalid token' })
      return
    }

    // ✅ Revoke old token before issuing a new one
    revokeToken(refreshToken)

    const { accessToken, refreshToken: newRefreshToken } = await generateTokens(
      user
    )

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.status(200).json({ accessToken })
  } catch (err) {
    next(err)
  }
}

export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;
    const refreshToken = req.cookies?.refreshToken; // ✅ Avoid destructuring if undefined

    if (!authHeader) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer "
    if (!token) {
      res.status(401).json({ message: "Unauthorized: Invalid token format" });
      return;
    }

    // Blacklist the token (Optional)
    await revokeToken(token);

    // Remove refresh token if available
    if (refreshToken) {
      await revokeToken(refreshToken);
      res.clearCookie("refreshToken");
    }

    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
};

export const promoteUser = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, newRole } = req.body

    if (!email || !newRole) {
      res.status(400).json({ message: 'Email and new role are required' })
      return
    }

    const user = await User.findOne({ email }).exec()
    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    }

    const role = await Role.findOne({ name: newRole }).exec()
    if (!role) {
      res.status(404).json({ message: 'Role not found' })
      return
    }

    user.role = role._id as mongoose.Types.ObjectId // ✅ Explicitly cast to ObjectId
    await user.save()

    res
      .status(200)
      .json({ message: `User promoted to ${newRole} successfully.` })
  } catch (err) {
    next(err)
  }
}
