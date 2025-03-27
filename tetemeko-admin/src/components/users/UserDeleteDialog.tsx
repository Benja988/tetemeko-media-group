import { User } from "@/data/user";
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface UserDeleteDialogProps {
  user: User | null;
  onDelete: () => void;
  onClose: () => void;
}

export default function UserDeleteDialog({ user, onDelete, onClose }: UserDeleteDialogProps) {
  if (!user) return null;

  return (
    <Dialog open={Boolean(user)} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <p className="text-sm">Are you sure you want to delete <strong>{user.name}</strong>?</p>
        <DialogFooter>
          <Button onClick={onClose} variant="outline">Cancel</Button>
          <Button onClick={onDelete} variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
