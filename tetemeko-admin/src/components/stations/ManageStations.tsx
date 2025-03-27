"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import StationFormDialog from "./StationFormDialog";

interface Station {
  id: string;
  name: string;
  frequency: string;
  location: string;
}

const initialStations: Station[] = [
  { id: "1", name: "Tetemeko FM", frequency: "101.5 MHz", location: "Dar es Salaam" },
];

export default function ManageStations() {
  const [stations, setStations] = useState<Station[]>(initialStations);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSave = (station: Station) => {
    setStations((prev) => 
      station.id ? prev.map((s) => (s.id === station.id ? station : s)) : [...prev, { ...station, id: Date.now().toString() }]
    );
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    setStations(stations.filter((station) => station.id !== id));
  };

  return (
    <Card className="p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Stations</h2>
        <Button onClick={() => { setSelectedStation(null); setIsOpen(true); }}>Add Station</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stations.map((station) => (
            <TableRow key={station.id}>
              <TableCell>{station.name}</TableCell>
              <TableCell>{station.frequency}</TableCell>
              <TableCell>{station.location}</TableCell>
              <TableCell>
                <Button size="sm" onClick={() => { setSelectedStation(station); setIsOpen(true); }}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(station.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <StationFormDialog isOpen={isOpen} onClose={() => setIsOpen(false)} onSave={handleSave} station={selectedStation} />
    </Card>
  );
}
