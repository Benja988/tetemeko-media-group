"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      className="relative w-full text-gray-900 py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/b7.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Title */}
        <div className="flex-1 text-center md:text-left text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock the Power of Media with Tetemeko
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you&apos;re looking to broadcast, produce, advertise, or engage your audience, we provide all the services you need to succeed. Explore how we can help you reach your full potential.
          </motion.p>

          <motion.a
            href="#services"
            className="inline-block bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-400 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore Our Services
          </motion.a>
        </div>
      </div>
    </section>
  );
}
