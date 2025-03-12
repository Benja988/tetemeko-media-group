import { Request, Response, NextFunction } from "express";
import Role from "../models/Role";
import User from "../models/User"; // Import User model

// ✅ Superadmin Creates a New Role
export const createRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { name, permissions } = req.body;

        // Check if role already exists
        const existingRole = await Role.findOne({ name });
        if (existingRole) {
            res.status(400).json({ message: "Role already exists" });
            return;
        }

        const newRole = new Role({ name, permissions });
        await newRole.save();

        res.status(201).json({ message: "Role created successfully", role: newRole });
    } catch (error) {
        next(error);
    }
};

// ✅ Get All Roles
export const getAllRoles = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        next(error);
    }
};

// ✅ Get a Single Role by ID
export const getRoleById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { roleId } = req.params;

        const role = await Role.findById(roleId);
        if (!role) {
            res.status(404).json({ message: "Role not found" });
            return;
        }

        res.status(200).json(role);
    } catch (error) {
        next(error);
    }
};

// ✅ Update a Role (Modify Name or Permissions)
export const updateRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { roleId } = req.params;
        const { name, permissions } = req.body;

        const role = await Role.findById(roleId);
        if (!role) {
            res.status(404).json({ message: "Role not found" });
            return;
        }

        if (name) {
          role.name = name;
        }
        if (permissions) {
          role.permissions = permissions;
        }

        await role.save();

        res.status(200).json({ message: "Role updated successfully", role });
    } catch (error) {
        next(error);
    }
};

// ✅ Delete a Role
export const deleteRole = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { roleId } = req.params;

        // Check if the role exists
        const role = await Role.findById(roleId);
        if (!role) {
            res.status(404).json({ message: "Role not found" });
            return;
        }

        // Prevent deletion of "superadmin" role
        if (role.name === "superadmin") {
            res.status(403).json({ message: "Cannot delete the superadmin role" });
            return;
        }

        await role.deleteOne();
        res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
        next(error);
    }
};

// ✅ Assign Role to a User
export const assignRoleToUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userId, roleId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const role = await Role.findById(roleId);
        if (!role) {
            res.status(404).json({ message: "Role not found" });
            return;
        }

        user.role = roleId;
        await user.save();

        res.status(200).json({ message: "Role assigned successfully", user });
    } catch (error) {
        next(error);
    }
};

// ✅ Remove Role from a User
export const removeRoleFromUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        user.role = null; // Remove role
        await user.save();

        res.status(200).json({ message: "Role removed successfully", user });
    } catch (error) {
        next(error);
    }
};
