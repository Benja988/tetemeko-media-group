"use client";

import { motion } from "framer-motion";
import { Play, Radio, Tv } from "lucide-react";

const liveStreams = [
  {
    name: "Youtube Live TV",
    type: "Live TV",
    icon: <Tv size={36} className="text-blue-500" />,
    link: "/tetemeko-tv",
  },
  {
    name: "Radio Piny Luo FM",
    type: "Live Radio",
    icon: <Radio size={36} className="text-green-500" />,
    link: "/urban-fm",
  },
  {
    name: "Classic Vibes",
    type: "Live Radio",
    icon: <Radio size={36} className="text-orange-500" />,
    link: "/classic-vibes",
  },
];

export function LiveNow() {
  return (
    <section className="relative w-full py-16 md:py-24 flex justify-center items-center">
      {/* Background Image with Rounded Corners */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: "url('/backgroundDesign.jpg')" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white drop-shadow-lg mb-6">
          Live Now
        </h2>

        <p className="text-gray-200 max-w-xl mb-10">
          Stay connected with our live radio and TV streams, bringing you nonstop entertainment and updates.
        </p>

        {/* Live Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {liveStreams.map((stream, index) => (
            <motion.a
              key={stream.name}
              href={stream.link}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group w-40 h-40 flex flex-col items-center justify-center 
                         bg-white/50 backdrop-blur-lg text-gray-900 rounded-xl shadow-md border border-gray-200 
                         hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {/* LIVE Badge */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                LIVE
              </div>

              {/* Icon */}
              {stream.icon}

              {/* Stream Name */}
              <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center">
                {stream.name}
              </h3>

              {/* Floating Play Button */}
              <motion.div
                className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full opacity-0 
                           group-hover:opacity-100 transition-all duration-300"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Play size={20} />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}



