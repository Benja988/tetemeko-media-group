import express from "express";
import { 
    register, 
    verifyEmail, 
    login, 
    refreshToken, 
    logout, 
    forgotPassword, 
    resetPassword 
} from "../controllers/auth.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limit login attempts to prevent brute-force attacks
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 7, // Limit each IP to 5 login attempts per window
    message: "Too many login attempts, please try again later",
});

// Routes
router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", loginLimiter, login);
router.post("/refresh-token", refreshToken);
router.post("/logout", authenticateJWT, logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;
