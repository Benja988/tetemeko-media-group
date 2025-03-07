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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full text-white py-20 bg-[#000E15]">
      <div className="container relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Side - Content */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-extrabold text-primary leading-tight"
            variants={textVariants}
          >
            About <span className="text-white">Tetemeko</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={textVariants}
          >
            At Tetemeko Media Group, we believe in the{" "}
            <strong>power of storytelling</strong> to inform, engage, and
            inspire. With a strong presence in radio, news, and digital
            platforms, we bring people closer to the stories that matter.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            variants={textVariants}
          >
            Our mission is to provide{" "}
            <strong>reliable, unbiased, and thought-provoking content</strong>{" "}
            to diverse audiences. We bridge communities, amplify voices, and
            deliver entertainment that resonates with millions.
          </motion.p>

          {/* Key Highlights */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
            variants={containerVariants}
          >
            {[
              {
                title: "Our Mission",
                description:
                  "To inform, entertain, and connect communities through high-quality journalism and storytelling.",
                icon: "📡",
              },
              {
                title: "Our Vision",
                description:
                  "To be the most trusted and influential media company, setting new standards in broadcasting and digital media.",
                icon: "🌍",
              },
              {
                title: "Our Values",
                description:
                  "Integrity, innovation, and inclusivity drive everything we do at Tetemeko Media Group.",
                icon: "✨",
              },
              {
                title: "Our Impact",
                description:
                  "We reach millions of listeners and readers across different platforms, shaping perspectives and sparking conversations.",
                icon: "🎙️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <h3 className="text-3xl font-bold text-primary flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={textVariants}>
            <Button className="bg-primary text-white px-8 py-3 text-lg rounded-lg hover:bg-primary/90 transition">
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with Glassmorphism */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {isClient && (
              <Image
                src="/broadcast.jpg"
                alt="Tetemeko Media Office"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            )}
            <div className="absolute inset-0 bg-black/40 rounded-2xl backdrop-blur-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}