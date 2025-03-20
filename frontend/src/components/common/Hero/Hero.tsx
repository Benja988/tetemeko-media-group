"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials"; // Importing testimonials

const ANIMATION_DELAY = {
  heading: 0.2,
  features: 0.3,
  testimonials: 0.5,
};

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-10 overflow-hidden">
      {/* Background Video Overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/b1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      >
        <source src="/test1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Hero Title */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold max-w-4xl leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: ANIMATION_DELAY.heading }}
        >
          The Future of Media is Here
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
          Experience seamless live streaming, up-to-the-minute news, and exclusive content like never before.
        </p>

        {/* Features Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: ANIMATION_DELAY.features }}
        >
          <FeatureCard
            title="Live Streaming"
            description="Tune in to real-time broadcasts anywhere, anytime."
            buttonText="🎧 Listen Live"
            isLive
          />
          <FeatureCard
            title="Latest News"
            description="Stay updated with breaking stories and exclusive insights."
            buttonText="📰 Read More"
          />
          <FeatureCard
            title="Upcoming Shows"
            description="Explore upcoming content and exclusive premieres."
            buttonText="📅 View Schedule"
          />
        </motion.div>

        {/* Testimonials Section (Updated) */}
        <motion.div
          className="mt-16 w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: ANIMATION_DELAY.testimonials }}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </section>
  );
}

// ⭐ Feature Card Component
function FeatureCard({
  title,
  description,
  buttonText,
  isLive,
}: {
  title: string;
  description: string;
  buttonText: string;
  isLive?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-xl text-left text-white"
    >
      {isLive && (
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs rounded-full animate-pulse">
          🔴 LIVE NOW
        </div>
      )}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-400">{description}</p>
      <Button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-500 transition-all">
        {buttonText}
      </Button>
    </motion.div>
  );
}

// ⭐ Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-black border border-gray-200 p-6 rounded-2xl shadow-lg max-w-md"
        >
          <div className="flex items-center gap-4">
            <Image
              src={testimonials[currentIndex].image}
              alt={`Profile picture of ${testimonials[currentIndex].name}`}
              width={60}
              height={60}
              className="rounded-full border-2 border-gray-200"
            />
            <div>
              <p className="font-semibold text-lg">{testimonials[currentIndex].name}</p>
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-700 italic text-sm md:text-base">
            &quot;{testimonials[currentIndex].review}&quot;
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
