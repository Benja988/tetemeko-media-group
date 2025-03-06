import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import User from "../models/User";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

// Generate JWT Tokens
const generateTokens = async (user: any) => {
    const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_SECRET as string,
        { expiresIn: "7d" }
    );

    // Store refresh token in the database
    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
};

// ✅ Register
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: "Email already in use" });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};

// ✅ Login
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }

        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        // Generate tokens
        const { accessToken, refreshToken } = await generateTokens(user);

        // Send tokens in HttpOnly cookies
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};

// ✅ Refresh Token
export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const decoded: any = jwt.verify(refreshToken, process.env.REFRESH_SECRET as string);

        // Find user and check token validity
        const user = await User.findById(decoded.id);
        if (!user || user.refreshToken !== refreshToken) {
            res.status(403).json({ message: "Invalid token" });
            return;
        }

        const { accessToken, refreshToken: newRefreshToken } = await generateTokens(user);

        // Send new refresh token in cookie
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};

// ✅ Logout
export const logout = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (req.user?.id) {
            await User.findByIdAndUpdate(req.user.id, { refreshToken: null }); // Remove refresh token from database
        }
        res.clearCookie("refreshToken");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Forgot Password
export const forgotPassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Generate Reset Token (Valid for 10 minutes)
        const resetToken = jwt.sign({ id: user._id }, process.env.RESET_SECRET as string, { expiresIn: "10m" });

        // TODO: Send email with resetToken

        res.status(200).json({ message: "Password reset link sent" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};

// ✅ Reset Password
export const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { token, newPassword } = req.body;

        const decoded: any = jwt.verify(token, process.env.RESET_SECRET as string);
        const user = await User.findById(decoded.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};

// ✅ Email Verification
export const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { token } = req.query;
        if (!token) {
            res.status(400).json({ message: "Invalid verification link" });
            return;
        }

        const decoded: any = jwt.verify(token as string, process.env.VERIFY_SECRET as string);
        const user = await User.findById(decoded.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        user.isVerified = true;
        await user.save();

        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
        next(error);
    }
};
