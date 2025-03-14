"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";  // Import ServiceCard

import { Radio, Newspaper, Mic, ShoppingCart, Video, Users } from "lucide-react";  // Import Lucide Icons

// Services Data
const services = [
  {
    title: "Radio Broadcasting",
    description: "Delivering high-quality radio content, live shows, and engaging programs across multiple stations.",
    icon: Radio,  // Lucide Icon for Radio Broadcasting
  },
  {
    title: "News & Journalism",
    description: "Stay informed with up-to-date news, investigative journalism, and insightful reports.",
    icon: Newspaper,  // Lucide Icon for News & Journalism
  },
  {
    title: "Podcasting",
    description: "Podcasts covering entertainment, deep conversations, and expert insights.",
    icon: Mic,  // Lucide Icon for Podcasting
  },
  {
    title: "Advertising & Promotions",
    description: "Targeted radio ads, promotions, and media campaigns for maximum reach.",
    icon: ShoppingCart,  // Lucide Icon for Advertising & Promotions
  },
  {
    title: "Video Production",
    description: "High-quality video content including interviews, event coverage, and branded media.",
    icon: Video,  // Lucide Icon for Video Production
  },
  {
    title: "Community Engagement",
    description: "Fostering community growth through events, social initiatives, and listener interactions.",
    icon: Users,  // Lucide Icon for Community Engagement
  },
];

export function ServicesSection() {
  return (
    <section className="relative w-full bg-white text-gray-900 py-20" id="services">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
