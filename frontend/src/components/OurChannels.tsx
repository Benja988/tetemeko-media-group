"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Music, Waves } from "lucide-react";

const channels = [
  {
    name: "Radio Piny Luo",
    icon: <Radio size={36} className="text-blue-500" />, 
    link: "/radio-one",
    description: "Trending music, talk shows, and live news updates.",
  },
  {
    name: "Music Live",
    icon: <Music size={36} className="text-purple-500" />, 
    link: "/music-live",
    description: "Live performances, exclusive tracks, and artist interviews.",
  },
  {
    name: "classic Vibes",
    icon: <Waves size={36} className="text-red-500" />, 
    link: "/classic-vibes",
    description: "Live performances, exclusive tracks, and artist interviews.",
  },
];

export function OurChannels() {
  const [currentChannel, setCurrentChannel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChannel((prev) => (prev + 1) % channels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        {/* Left: Rotating Channels */}
        <div className="w-full md:w-1/2 space-y-10">
          <h2 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg">
            Our Channels
          </h2>

          <div className="relative w-full h-40 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.a
                key={channels[currentChannel].name}
                href={channels[currentChannel].link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center gap-2 p-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 w-80 text-center relative overflow-hidden"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="text-blue-500 flex-shrink-0"
                >
                  {channels[currentChannel].icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900">{channels[currentChannel].name}</h3>
                <p className="text-gray-600 text-sm">{channels[currentChannel].description}</p>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Description Section */}
        <motion.div
          className="w-full md:w-1/2 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Explore Our Channels
          </h3>
          <p className="text-md leading-relaxed text-gray-700">
            <span className="font-bold text-blue-600">Tetemeko Media Group</span> brings you a curated selection of radio stations for 
            <span className="text-indigo-600 font-medium"> news, entertainment, and deep conversations. </span>
            Whether you love music, culture, or discussions, we have a channel for you.
          </p>
          <ul className="list-disc pl-5 mt-4 text-md space-y-2">
            <li><span className="font-semibold text-blue-600">Radio Piny Luo:</span> 24/7 news, talk shows, and community updates.</li>
            <li><span className="font-semibold text-purple-500">Music Live:</span> Live performances, artist interviews, and exclusive tracks.</li>
            <li><span className="font-semibold text-red-500">Classic Vibes:</span> Live performances, artist interviews, and exclusive tracks.</li>
          </ul>
          <p className="mt-6 text-md text-gray-600">
            <span className="font-semibold text-indigo-500">Tune in now</span> and discover the sound of the future!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
