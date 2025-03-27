"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StationFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (station: { id: string; name: string; frequency: string; location: string }) => void;
  station?: { id: string; name: string; frequency: string; location: string } | null;
}

export default function StationFormDialog({ isOpen, onClose, onSave, station }: StationFormDialogProps) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    frequency: "",
    location: "",
  });

  useEffect(() => {
    if (station) {
      setFormData(station);
    } else {
      setFormData({ id: "", name: "", frequency: "", location: "" });
    }
  }, [station]);

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
          <DialogTitle>{station ? "Edit Station" : "Add Station"}</DialogTitle>
        </DialogHeader>
        <Input name="name" placeholder="Station Name" value={formData.name} onChange={handleChange} />
        <Input name="frequency" placeholder="Frequency (e.g., 101.5 MHz)" value={formData.frequency} onChange={handleChange} />
        <Input name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <DialogFooter>
          <Button onClick={onClose} variant="secondary">Cancel</Button>
          <Button onClick={handleSubmit}>{station ? "Update" : "Save"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
