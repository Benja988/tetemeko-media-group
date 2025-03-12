import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";
import Role from "../models/Role";  // Ensure role model is imported

export interface UserPayload extends JwtPayload {
    id: string;
    role: string;
}

export interface AuthenticatedRequest extends Request {
    user?: UserPayload;
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Unauthorized: No token provided" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
        req.user = decoded;
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: "Unauthorized: Token expired" });
        } else {
            res.status(403).json({ message: "Forbidden: Invalid token" });
        }
    }
};

export const authorize = (roles: string[]) => {
    return async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
      try {
        const user = await User.findById(req.user?.id).populate("role").exec();
  
        if (!user) {
          res.status(403).json({ message: "Access denied" });
          return next();
        }
  
        // Ensure `user.role` is populated
        const userRole = await Role.findById(user.role);
        if (!userRole || !roles.includes(userRole.name)) {
          res.status(403).json({ message: "Access denied" });
          return next();
        }
  
        next(); // ✅ Continue if authorized
      } catch (err) {
        next(err); // ✅ Pass errors to Express error handler
      }
    };
  };
  
  //   try {
  //     const user = await User.findById(req.body.userId).populate("role");
  
  //     if (!user || !user.role) {
  //       return res.status(403).json({ message: "Access denied" });
  //     }
  
  //     // ✅ Type Assertion: Tell TypeScript that user.role is of type IRole
  //     const userRole = user.role as IRole;
  
  //     if (userRole.name !== "admin") {
  //       return res.status(403).json({ message: "Access denied" });
  //     }
  
  //     next();
  //   } catch (error) {
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // };