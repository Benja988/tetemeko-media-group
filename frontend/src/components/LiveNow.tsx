"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const stations = [
  {
    id: 1,
    name: "Tetemeko FM",
    genre: "News & Talk",
    url: "https://stream.example.com/tetemeko",
  },
  {
    id: 2,
    name: "Urban Vibes Radio",
    genre: "Hip-Hop & RnB",
    url: "https://stream.example.com/urban-vibes",
  },
  {
    id: 3,
    name: "Classic Hits 101",
    genre: "Oldies & Classics",
    url: "https://stream.example.com/classic-hits",
  },
];

export function LiveNow() {
  const [playingStation, setPlayingStation] = useState<number | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio()); // Ensure Audio object is only created on the client
    }
  }, []);

  const togglePlay = (stationId: number, streamUrl: string) => {
    if (!audio) {
      return;
    }

    if (playingStation === stationId) {
      audio.pause();
      setPlayingStation(null);
    } else {
      audio.src = streamUrl;
      audio.play();
      setPlayingStation(stationId);
    }
  };

  return (
    <section className="w-full bg-[#000E15] text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
        🔴 Live Now
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stations.map((station) => (
            <motion.div
              key={station.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <Radio className="text-primary w-10 h-10" />
                <div>
                  <h3 className="text-xl font-semibold">{station.name}</h3>
                  <p className="text-gray-400">{station.genre}</p>
                </div>
              </div>

              <Button
                onClick={() => togglePlay(station.id, station.url)}
                className={`px-4 py-2 rounded-full ${
                  playingStation === station.id ? "bg-red-500" : "bg-primary"
                }`}
              >
                {playingStation === station.id ? <Pause /> : <Play />}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
