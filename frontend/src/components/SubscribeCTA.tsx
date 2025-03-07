"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SubscribeCTA() {
  return (
    <section className="w-full bg-[#000E15] text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📢 Stay Updated with Tetemeko Media
        </motion.h2>
        <motion.p
          className="text-lg text-gray-200 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join thousands of listeners and never miss an update! Subscribe now.
        </motion.p>

        {/* Newsletter Signup */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 w-72 rounded-lg text-white bg-gray-800 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg text-black font-semibold">
            Subscribe 📩
          </Button>
        </motion.div>

        {/* CTA Button for Advertisers */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Get Started 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
