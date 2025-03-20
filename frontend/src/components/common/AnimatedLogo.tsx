"use client";

import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <motion.div
      className="text-2xl font-bold text-text"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        Tetemeko
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        Media Group
      </motion.span>
    </motion.div>
  );
}
