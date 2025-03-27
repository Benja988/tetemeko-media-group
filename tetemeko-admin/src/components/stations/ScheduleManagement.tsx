"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import ScheduleFormDialog from "./ScheduleFormDialog";

interface Program {
  id: string;
  station: string;
  programName: string;
  time: string;
}

const initialPrograms: Program[] = [
  { id: "1", station: "Tetemeko FM", programName: "Morning Show", time: "6 AM - 10 AM" },
];

export default function ScheduleManagement() {
  const [programs, setPrograms] = useState<Program[]>(initialPrograms);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = (program: Program) => {
    setPrograms((prev) => 
      program.id ? prev.map((p) => (p.id === program.id ? program : p)) : [...prev, { ...program, id: Date.now().toString() }]
    );
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    setPrograms(programs.filter((program) => program.id !== id));
  };

  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Schedule Management</h2>
      <Button onClick={() => { setSelectedProgram(null); setIsOpen(true); }}>Add Program</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Station</TableCell>
            <TableCell>Program</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.id}>
              <TableCell>{program.station}</TableCell>
              <TableCell>{program.programName}</TableCell>
              <TableCell>{program.time}</TableCell>
              <TableCell>
                <Button size="sm" onClick={() => { setSelectedProgram(program); setIsOpen(true); }}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(program.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScheduleFormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onSave={handleSave} program={selectedProgram} />
    </Card>
  );
}
