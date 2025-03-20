"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const logoText = "Tetemeko Media Group";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Hide after 3.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  } // Hide when loading is complete

  return (
    <div className="fixed inset-0 bg-blue-900 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="flex space-x-1 text-text font-bold"
      >
        {logoText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1, // Delay each letter
              duration: 0.4,
              ease: "easeOut",
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" // Responsive text sizes
          >
            {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
