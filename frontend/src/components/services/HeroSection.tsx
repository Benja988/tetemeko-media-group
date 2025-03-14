"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full bg-white text-gray-900 py-28">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Title */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Unlock the Power of Media with Tetemeko
          </motion.h1>
        </div>

        {/* Right Side: Explanation */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Whether you're looking to broadcast, produce, advertise, or engage your audience, we provide all the services you need to succeed. Explore how we can help you reach your full potential.
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
