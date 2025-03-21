"use client";

import { motion } from "framer-motion";
import { Play, Radio, Tv } from "lucide-react";
import { useMemo } from "react";

export function LiveNow() {
  // Memoize stream data to avoid unnecessary re-renders
  const liveStreams = useMemo(() => [
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
  ], []);

  return (
    <section className="relative w-full py-16 md:py-24 flex justify-center items-center">
      {/* ✅ Background Image with Overlay for Readability */}
      <div className="absolute inset-0 w-full h-full bg-[url('/backgroundDesign.jpg')] bg-cover bg-center rounded-3xl">
        <div className="absolute inset-0 bg-black/50 rounded-3xl" /> {/* Dark Overlay */}
      </div>

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* ✅ Heading with Gradient Text */}
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg mb-6">
          Live Now
        </h2>

        <p className="text-gray-300 max-w-xl mb-10 text-lg">
          Stay connected with our live radio and TV streams, bringing you nonstop entertainment and updates.
        </p>

        {/* ✅ Live Streams Grid (More Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream, index) => (
            <motion.a
              key={stream.name}
              href={stream.link}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group w-44 h-44 flex flex-col items-center justify-center 
                         bg-white/70 backdrop-blur-lg text-gray-900 rounded-2xl shadow-lg border border-gray-300 
                         hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              {/* ✅ LIVE Badge with Screen Reader Support */}
              <div
                className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                aria-live="polite"
              >
                LIVE
              </div>

              {/* ✅ Icon */}
              {stream.icon}

              {/* ✅ Stream Name */}
              <h3 className="mt-2 text-sm font-semibold text-gray-800 text-center">
                {stream.name}
              </h3>

              {/* ✅ Improved Play Button Animation */}
              <motion.div
                className="absolute bottom-2 right-2 bg-blue-950 text-white p-2 rounded-full opacity-0 
                           group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
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
