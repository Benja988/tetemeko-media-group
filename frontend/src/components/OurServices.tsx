"use client";

import { motion } from "framer-motion";
import { Mic, Radio, Newspaper, ShoppingCart, Users, Video } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Radio Broadcasting",
    description: "Delivering high-quality radio content, live shows, and engaging programs across multiple stations.",
    icon: <Radio className="w-14 h-14 text-red-500" />,
  },
  {
    id: 2,
    title: "News & Journalism",
    description: "Stay informed with up-to-date news, investigative journalism, and insightful reports.",
    icon: <Newspaper className="w-14 h-14 text-blue-500" />,
  },
  {
    id: 3,
    title: "Podcasting",
    description: "Podcasts covering entertainment, deep conversations, and expert insights.",
    icon: <Mic className="w-14 h-14 text-purple-500" />,
  },
  {
    id: 4,
    title: "Advertising & Promotions",
    description: "Targeted radio ads, promotions, and media campaigns for maximum reach.",
    icon: <ShoppingCart className="w-14 h-14 text-green-500" />,
  },
  {
    id: 5,
    title: "Video Production",
    description: "High-quality video content including interviews, event coverage, and branded media.",
    icon: <Video className="w-14 h-14 text-yellow-500" />,
  },
  {
    id: 6,
    title: "Community Engagement",
    description: "Fostering community growth through events, social initiatives, and listener interactions.",
    icon: <Users className="w-14 h-14 text-orange-500" />,
  },
];

export function OurServices() {
  return (
    <section className="w-full py-20 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon Container */}
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-white rounded-full shadow-md ring-2 ring-gray-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-3">{service.description}</p>

              {/* Animated Underline */}
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
