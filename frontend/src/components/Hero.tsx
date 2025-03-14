"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "John D.", review: "Tetemeko FM keeps me updated every morning! 🎙️", rating: 5, image: "/user/prof.jpg" },
  { id: 2, name: "Sarah M.", review: "Amazing content and great hosts. Love the vibes! 🔥", rating: 4, image: "/user/prof.jpg" },
  { id: 3, name: "James K.", review: "Best radio station for entertainment and news. 👏", rating: 5, image: "/user/prof.jpg" },
];

export function Hero() {
  const [isLive, setIsLive] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsLive(true), 1500);
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(reviewInterval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-black overflow-hidden px-4 md:px-8">
      {/* Background Video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent z-0"></div>
      <video autoPlay loop muted playsInline poster="/fallback-image.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        aria-hidden="true"
      >
        <source src="/background1.mp4" type="video/mp4" />
      </video>

      {/* Floating Reviews (Position changes for mobile) */}
      <motion.div 
        className="absolute right-4 top-24 md:top-28 md:right-6 lg:top-20 bg-white/10 border border-white/30 backdrop-blur-lg rounded-2xl p-4 text-white max-w-xs shadow-lg transition-all hover:scale-105 md:block hidden"
        initial={{ opacity: 0, x: 30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <Image src={testimonials[currentReview].image} alt={testimonials[currentReview].name} width={50} height={50} className="rounded-full border-2 border-white"/>
          <div>
            <p className="font-semibold">{testimonials[currentReview].name}</p>
            <div className="flex">
              {[...Array(testimonials[currentReview].rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-4 h-4" />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-gray-300 italic">&quot;{testimonials[currentReview].review}&quot;</p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Logo */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <Image src="/logo.jpg" alt="Tetemeko Media Logo" width={220} height={80} className="mb-6 opacity-90 drop-shadow-lg" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-3xl leading-tight tracking-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          The Future of Media, Live & On Demand
        </motion.h1>

        {/* Cards Section - Responsive Grid */}
        <motion.div 
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Card 1: Live Streaming */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="group relative bg-white text-black border border-gray-300 p-6 rounded-2xl shadow-lg transition-all"
            style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)" }} 
          >
            {isLive && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs rounded-full animate-pulse shadow-md">
                🔴 LIVE NOW
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-semibold">Live Streaming</h3>
            <p className="mt-2 text-sm md:text-base">Tune in to real-time broadcasts anywhere, anytime.</p>
            <Button className="mt-4 bg-red-500 text-white px-4 py-2 md:px-5 md:py-2 rounded-full shadow-md hover:bg-red-600 transition-all">
              🎧 Listen Live
            </Button>
          </motion.div>

          {/* Card 2: Latest News */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="group relative bg-white text-black border border-gray-300 p-6 rounded-2xl shadow-lg transition-all"
            style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold">Latest News</h3>
            <p className="mt-2 text-sm md:text-base">Stay updated with breaking stories and exclusive insights.</p>
            <Button className="mt-4 border border-gray-900 text-black px-4 py-2 md:px-5 md:py-2 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition-all">
              📰 Read More
            </Button>
          </motion.div>

          {/* Card 3: Upcoming Shows */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="group relative bg-white text-black border border-gray-300 p-6 rounded-2xl shadow-lg transition-all"
            style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%)" }}
          >
            <h3 className="text-xl md:text-2xl font-semibold">Upcoming Shows</h3>
            <p className="mt-2 text-sm md:text-base">Explore upcoming content and exclusive premieres.</p>
            <Button className="mt-4 border border-gray-900 text-black px-4 py-2 md:px-5 md:py-2 rounded-full shadow-md hover:bg-gray-900 hover:text-white transition-all">
              📅 View Schedule
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
