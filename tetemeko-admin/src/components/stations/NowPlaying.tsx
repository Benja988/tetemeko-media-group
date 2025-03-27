"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface NowPlayingData {
  track: string;
  show: string;
  host: string;
}

export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData>({
    track: "Hit Song - Artist",
    show: "Morning Vibes",
    host: "DJ John",
  });

  const handleUpdate = () => {
    console.log("Now playing updated:", nowPlaying);
  };

  return (
    <Card className="p-6 shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
      <Input
        type="text"
        placeholder="Track"
        value={nowPlaying.track}
        onChange={(e) => setNowPlaying({ ...nowPlaying, track: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Show"
        value={nowPlaying.show}
        onChange={(e) => setNowPlaying({ ...nowPlaying, show: e.target.value })}
        className="mt-2"
      />
      <Input
        type="text"
        placeholder="Host"
        value={nowPlaying.host}
        onChange={(e) => setNowPlaying({ ...nowPlaying, host: e.target.value })}
        className="mt-2"
      />
      <Button className="mt-4 w-full" onClick={handleUpdate}>Update Now Playing</Button>
    </Card>
  );
}
