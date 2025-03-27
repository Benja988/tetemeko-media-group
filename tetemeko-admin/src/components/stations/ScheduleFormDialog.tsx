"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ScheduleFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (program: { id: string; station: string; programName: string; time: string }) => void;
  program?: { id: string; station: string; programName: string; time: string } | null;
}

export default function ScheduleFormDialog({ isOpen, onClose, onSave, program }: ScheduleFormDialogProps) {
  const [formData, setFormData] = useState({
    id: "",
    station: "",
    programName: "",
    time: "",
  });

  useEffect(() => {
    if (program) {
      setFormData(program);
    } else {
      setFormData({ id: "", station: "", programName: "", time: "" });
    }
  }, [program]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{program ? "Edit Program" : "Add Program"}</DialogTitle>
        </DialogHeader>
        <Input name="station" placeholder="Station Name" value={formData.station} onChange={handleChange} />
        <Input name="programName" placeholder="Program Name" value={formData.programName} onChange={handleChange} />
        <Input name="time" placeholder="Time (e.g., 6 AM - 10 AM)" value={formData.time} onChange={handleChange} />
        <DialogFooter>
          <Button onClick={onClose} variant="secondary">Cancel</Button>
          <Button onClick={handleSubmit}>{program ? "Update" : "Save"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
