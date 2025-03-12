import express from "express";
import {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole,
    assignRoleToUser,
    removeRoleFromUser
} from "../controllers/role.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";
import { authorizeSuperAdmin } from "../middlewares/role.middleware";

const router = express.Router();

// ✅ Create a new role (Superadmin only)
router.post("/", authenticateJWT, authorizeSuperAdmin, createRole);

// ✅ Get all roles
router.get("/", authenticateJWT, getAllRoles);

// ✅ Get a single role by ID
router.get("/:roleId", authenticateJWT, getRoleById);

// ✅ Update a role (Superadmin only)
router.put("/:roleId", authenticateJWT, authorizeSuperAdmin, updateRole);

// ✅ Delete a role (Superadmin only)
router.delete("/:roleId", authenticateJWT, authorizeSuperAdmin, deleteRole);

// ✅ Assign role to a user (Superadmin only)
router.post("/assign-role", authenticateJWT, authorizeSuperAdmin, assignRoleToUser);

// ✅ Remove role from a user (Superadmin only)
router.post("/remove-role", authenticateJWT, authorizeSuperAdmin, removeRoleFromUser);

export default router;
