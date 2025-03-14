"use client";

import { motion } from "framer-motion";
import { Play, Radio, Tv } from "lucide-react";

const liveStreams = [
  {
    name: "Tetemeko TV",
    type: "Live TV",
    icon: <Tv size={36} className="text-blue-500" />,
    link: "/tetemeko-tv",
    description: "24/7 live news, entertainment, and sports updates.",
  },
  {
    name: "Urban FM",
    type: "Live Radio",
    icon: <Radio size={36} className="text-green-500" />,
    link: "/urban-fm",
    description: "The best of R&B, Hip-Hop, and exclusive interviews.",
  },
  {
    name: "Classic Vibes",
    type: "Live Radio",
    icon: <Radio size={36} className="text-orange-500" />,
    link: "/classic-vibes",
    description: "Timeless classics and smooth jazz sessions.",
  },
];

export function LiveNow() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-between">
        {/* Left Side (Live Streams) */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <h2 className="text-5xl font-extrabold text-left text-gray-900 drop-shadow-lg">
            Live Now
          </h2>
          <p className="text-gray-700 mt-2 text-lg text-left max-w-2xl">
            Stay connected with our live radio and TV streams, bringing you nonstop entertainment and updates.
          </p>

          {/* Live Streams Column */}
          <div className="mt-10 flex flex-col gap-6">
            {liveStreams.map((stream, index) => (
              <motion.a
                key={stream.name}
                href={stream.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group block overflow-hidden rounded-xl backdrop-blur-md p-4 shadow-md border border-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  {stream.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{stream.name}</h3>
                    <p className="text-sm text-gray-600">{stream.type}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{stream.description}</p>

                {/* Floating Play Button */}
                <motion.div
                  className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <Play size={20} />
                </motion.div>

                {/* Live Indicator */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  LIVE
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side (Description) */}
        <div className="w-full lg:w-1/3 lg:pl-12 text-left bg-white rounded-lg shadow-lg p-6 relative z-10 mt-10 lg:mt-0">
          <p className="text-lg text-gray-700 mb-6">
            Experience the best of Tetemeko&apos;s live streams. Whether you&apos;re into exciting live TV shows or the latest music and radio hits, we have something for you. From Tetemeko TV bringing you news and entertainment 24/7 to the vibrant sounds of Urban FM and the timeless classics of Classic Vibes, our live streams keep you updated and entertained no matter where you are.
          </p>

          <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-r from-transparent to-black rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
