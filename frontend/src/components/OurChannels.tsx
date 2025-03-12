"use client";

import { motion } from "framer-motion";
import { Radio, Music, Waves } from "lucide-react";

const channels = [
  { name: "Radio One", icon: <Radio size={50} />, link: "/radio-one" },
  { name: "Music Live", icon: <Music size={50} />, link: "/music-live" },
  { name: "Wave FM", icon: <Waves size={50} />, link: "/wave-fm" },
];

export function OurChannels() {
  return (
    <section className="w-full bg-[#000E15] text-white py-16 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Channels</h2>
        <p className="text-gray-300 mb-8">Explore our diverse media channels.</p>
      </div>

      {/* Icons Moving, Text Static */}
      <div className="flex justify-center gap-8">
        {channels.map((channel, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#000E15] rounded-lg p-6 shadow-md w-48"
          >
            {/* Only move the icon */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-primary"
            >
              {channel.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mt-3">{channel.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
