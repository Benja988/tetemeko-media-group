import { Response, NextFunction } from "express";
import User from "../models/User";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export const authorizeSuperAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        if (!req.user || !req.user.id) {
            res.status(401).json({ message: "Unauthorized: No user found in request" });
            return;
        }

        // Populate the role field to get full role details
        const user = await User.findById(req.user.id).populate<{ role: { name: string } }>("role");

        if (!user || !user.role || user.role.name !== "superadmin") {
            res.status(403).json({ message: "Forbidden: Only superadmins can perform this action" });
            return;
        }

        next(); // Only call next() if validation succeeds
    } catch (error) {
        next(error); // Pass error to Express error handler
    }
};
