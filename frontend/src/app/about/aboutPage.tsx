"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative w-full text-white py-20 bg-gradient-to-b from-[#00141F] to-[#000E15]">
      {/* Decorative Background Waves */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/30 to-transparent rounded-b-[50%]"></div>

      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Section - Image with Overlap Effect */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg">
              {isClient && (
                <Image
                  src="/broadcast.jpg"
                  alt="Tetemeko Media Office"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-lg"
                />
              )}
              <div className="absolute -top-8 -left-8 w-28 h-28 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/40 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-extrabold text-primary leading-tight">
              About <span className="text-white">Tetemeko</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At <strong>Tetemeko Media Group</strong>, we harness the power of{" "}
              <strong>storytelling</strong> to inform, engage, and inspire.
              Through radio, news, and digital platforms, we bring communities
              closer to stories that matter.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "🎙️ Our Mission",
                  description:
                    "To inform, entertain, and connect communities through high-quality journalism.",
                },
                {
                  title: "🌍 Our Reach",
                  description:
                    "Connecting millions across radio, news, and digital platforms worldwide.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/90 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button className="bg-primary text-white px-8 py-3 text-lg rounded-lg shadow-md hover:bg-primary/90 transition">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
