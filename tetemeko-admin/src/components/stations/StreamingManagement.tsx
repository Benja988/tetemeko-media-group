"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StreamingData {
  streamUrl: string;
  metadata: string;
  schedule: string;
}

export default function StreamingManagement() {
  const [streamData, setStreamData] = useState<StreamingData>({
    streamUrl: "https://example.com/live-stream",
    metadata: "Tetemeko FM - Live Broadcast",
    schedule: "Every day 6 AM - 10 PM",
  });

  const handleUpdate = () => {
    console.log("Streaming data updated:", streamData);
  };

  return (
    <Card className="p-6 shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Live Streaming Management</h2>
      <Input
        type="text"
        placeholder="Streaming URL"
        value={streamData.streamUrl}
        onChange={(e) => setStreamData({ ...streamData, streamUrl: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Metadata"
        value={streamData.metadata}
        onChange={(e) => setStreamData({ ...streamData, metadata: e.target.value })}
        className="mt-2"
      />
      <Input
        type="text"
        placeholder="Schedule"
        value={streamData.schedule}
        onChange={(e) => setStreamData({ ...streamData, schedule: e.target.value })}
        className="mt-2"
      />
      <Button className="mt-4 w-full" onClick={handleUpdate}>Update Streaming Info</Button>
    </Card>
  );
}
