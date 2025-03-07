"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "John D.",
    review: "Tetemeko FM keeps me updated every morning! 🎙️",
    rating: 5,
    image: "/users/john.jpg",
  },
  {
    id: 2,
    name: "Sarah M.",
    review: "Amazing content and great hosts. Love the vibes! 🔥",
    rating: 4,
    image: "/users/sarah.jpg",
  },
  {
    id: 3,
    name: "James K.",
    review: "Best radio station for entertainment and news. 👏",
    rating: 5,
    image: "/users/james.jpg",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">⭐ Listener Reviews</h2>

        <div className="relative w-full max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-2 border-primary"
              />
              <p className="text-lg text-gray-300 italic">"{testimonials[index].review}"</p>
              <div className="flex">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <p className="text-primary font-semibold">{testimonials[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
