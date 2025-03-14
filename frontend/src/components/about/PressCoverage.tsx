"use client"

import { motion } from "framer-motion";

export function PressCoverage() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-bold text-center text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Press Coverage
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-black">Featured in XYZ Magazine</h4>
            <p className="text-gray-700 mt-2">
              Tetemeko Media was featured as one of the most innovative broadcasters in the industry.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-black">Awarded for Excellence</h4>
            <p className="text-gray-700 mt-2">
              Our radio programming has won multiple awards in the past year, including the prestigious XYZ Award.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-black">On Air Interviews</h4>
            <p className="text-gray-700 mt-2">
              We've been interviewed by leading media outlets to discuss the future of broadcasting and media.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
