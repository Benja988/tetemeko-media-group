"use client";

import { motion } from "framer-motion";
import { Radio, Music, Waves, RadioTower, Mic2 } from "lucide-react";

const channels = [
  { name: "Radio One", icon: <Radio size={50} />, link: "/radio-one" },
  { name: "Music Live", icon: <Music size={50} />, link: "/music-live" },
  { name: "Wave FM", icon: <Waves size={50} />, link: "/wave-fm" },
  { name: "Broadcast 24", icon: <RadioTower size={50} />, link: "/broadcast-24" },
  { name: "Podcast Hub", icon: <Mic2 size={50} />, link: "/podcast-hub" },
];

export function OurChannels() {
  return (
    <section className="w-full bg-[#000E15] text-white py-16 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Our Channels</h2>
        <p className="text-gray-300 mb-8">Explore our diverse media channels.</p>
      </div>

      {/* Infinite Scrolling List */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-12 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...channels, ...channels].map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 transition-transform w-48"
            >
              <div className="text-primary">{channel.icon}</div>
              <h3 className="text-lg font-semibold mt-3">{channel.name}</h3>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
