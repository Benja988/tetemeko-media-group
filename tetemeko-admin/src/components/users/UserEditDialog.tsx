import { useState } from "react";
import { User, UserRole } from "@/data/user";
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface UserEditDialogProps {
  user: User | null;
  onSave: (userId: string, role: UserRole, status: boolean) => void;
  onClose: () => void;
}

export default function UserEditDialog({ user, onSave, onClose }: UserEditDialogProps) {
  const [editRole, setEditRole] = useState<UserRole | "">(user?.role || "");
  const [editStatus, setEditStatus] = useState<boolean>(user?.isActive || false);

  if (!user) return null;

  return (
    <Dialog open={Boolean(user)} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Edit User</DialogTitle>
        <div className="grid gap-4 py-4">
          <div>
            <label className="block text-sm font-medium">Role</label>
            <Select onValueChange={(value) => setEditRole(value as UserRole)} defaultValue={user.role}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                <SelectItem value={UserRole.MANAGER}>Manager</SelectItem>
                <SelectItem value={UserRole.WEB_USER}>Web User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium">Status</label>
            <Select onValueChange={(value) => setEditStatus(value === "active")} defaultValue={user.isActive ? "active" : "inactive"}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => onSave(user._id, editRole as UserRole, editStatus)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
