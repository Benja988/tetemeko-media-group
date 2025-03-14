"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-20">
      <motion.h3
        className="text-4xl font-bold text-gray-900 mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Case Studies
      </motion.h3>
      <motion.div
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Repeat for each case study */}
        <div className="bg-gray-100 p-8 rounded-xl shadow-xl">
          <Image
            src="/path-to-your-image.jpg"
            alt="Case Study 1"
            width={500} // Set an appropriate width
            height={200} // Set an appropriate height
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h4 className="text-2xl font-bold text-gray-900 mb-2">Case Study Title 1</h4>
          <p className="text-gray-600">Description of the case study and successful outcome. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </motion.div>
    </section>
  );
}
