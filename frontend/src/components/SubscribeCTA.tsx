"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SubscribeCTA() {
  return (
    <motion.section
      className="w-full py-20 bg-gradient-to-b from-[#f4f7fa] via-[#ffffff] to-[#000406] relative z-10"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold tracking-tight text-black"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Stay Ahead with <span className="text-gray-800">Tetemeko Media</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Join a community of thousands and receive the latest updates, news, and exclusive content directly in your inbox.
        </motion.p>

        {/* Newsletter Signup */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-80 rounded-full bg-gray-100 border border-gray-300 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition-all"
            aria-label="Email address"
          />
          <Button className="px-6 py-3 rounded-full bg-black text-white font-semibold text-lg shadow-md hover:bg-gray-900 transition-all">
            Subscribe 📩
          </Button>
        </motion.div>

        {/* CTA Button for Advertisers */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="px-6 py-3 rounded-full border border-gray-800 text-black text-lg font-semibold shadow-sm hover:bg-gray-100 transition-all"
          >
            Get Started 🚀
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
