"use client";

import { motion } from "framer-motion";
import { Mic, Radio, Newspaper, ShoppingCart, Users, Video } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Radio Broadcasting",
    description: "Delivering high-quality radio content, live shows, and engaging programs across multiple stations.",
    icon: <Radio className="w-12 h-12 text-primary" />,
  },
  {
    id: 2,
    title: "News & Journalism",
    description: "Stay informed with up-to-date news, investigative journalism, and insightful reports.",
    icon: <Newspaper className="w-12 h-12 text-primary" />,
  },
  {
    id: 3,
    title: "Podcasting",
    description: "Podcasts covering entertainment, deep conversations, and expert insights.",
    icon: <Mic className="w-12 h-12 text-primary" />,
  },
  {
    id: 4,
    title: "Advertising & Promotions",
    description: "Targeted radio ads, promotions, and media campaigns for maximum reach.",
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
  },
  {
    id: 5,
    title: "Video Production",
    description: "High-quality video content including interviews, event coverage, and branded media.",
    icon: <Video className="w-12 h-12 text-primary" />,
  },
  {
    id: 6,
    title: "Community Engagement",
    description: "Fostering community growth through events, social initiatives, and listener interactions.",
    icon: <Users className="w-12 h-12 text-primary" />,
  },
];

export function OurServices() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#00141F] to-[#000E15] text-white py-20 overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        className="absolute -top-16 left-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          className="text-5xl font-extrabold text-primary mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-gray-900 p-8 rounded-xl shadow-xl text-center transform transition-all duration-500 group hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Glowing Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-primary blur-2xl transition-all duration-500"
              />

              {/* Icon */}
              <motion.div
                className="flex justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 mt-3">{service.description}</p>

              {/* Animated Border */}
              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
