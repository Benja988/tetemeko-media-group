"use client"

import { motion } from "framer-motion";

export function UniqueValueProposition() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3
          className="text-4xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          What Makes Us Different
        </motion.h3>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          At Tetemeko Media, we combine cutting-edge technology, engaging content, and a passion for storytelling to
          connect with our audiences. Our commitment to providing **trusted news**, **entertainment**, and **community
          engagement** sets us apart from the competition.
        </motion.p>
      </div>
    </section>
  );
}
