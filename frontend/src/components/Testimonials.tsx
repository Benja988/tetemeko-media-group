"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonials Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-2 border-gray-900"
              />

              {/* Review */}
              <p className="text-lg text-gray-600 italic text-center">&quot;{testimonial.review}&quot;</p>

              {/* Star Rating */}
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              {/* Name */}
              <p className="text-gray-900 font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
