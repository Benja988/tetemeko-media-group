"use client"

import { motion } from "framer-motion";

export function Achievements() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-bold text-center text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Achievements & Impact
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-black">Award Winning Content</h4>
            <p className="text-gray-700 mt-2">
              We’ve been recognized for our high-quality radio programming, winning multiple industry awards for best
              broadcasting and content creation.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-black">Global Reach</h4>
            <p className="text-gray-700 mt-2">
              Our broadcasts reach millions of listeners worldwide, with a growing digital presence on multiple platforms.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-black">Community Engagement</h4>
            <p className="text-gray-700 mt-2">
              We engage with communities through educational programs, live events, and public service initiatives to make
              a lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
