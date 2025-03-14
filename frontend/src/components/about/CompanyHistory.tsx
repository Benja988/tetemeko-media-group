"use client"

import { motion } from "framer-motion";

export function CompanyHistory() {
  return (
    <section className="py-12 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Journey
        </motion.h3>
        <motion.p
          className="text-lg text-center text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Founded in [Year], Tetemeko Media Group started as a small radio station with a vision to create engaging content
          that brings communities closer together. Over the years, we've expanded our reach, incorporating digital platforms,
          news, and entertainment to keep our audience informed and entertained.
        </motion.p>
      </div>
    </section>
  );
}
