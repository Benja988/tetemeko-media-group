"use client";

import { motion } from "framer-motion";
import { Mic, Radio, Newspaper, ShoppingCart, Users, Video, LucideIcon } from "lucide-react";

// Define the Service type
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Services Data
const services: Service[] = [
  {
    title: "Radio Broadcasting",
    description: "Delivering high-quality radio content, live shows, and engaging programs across multiple stations.",
    icon: Radio,
  },
  {
    title: "News & Journalism",
    description: "Stay informed with up-to-date news, investigative journalism, and insightful reports.",
    icon: Newspaper,
  },
  {
    title: "Podcasting",
    description: "Podcasts covering entertainment, deep conversations, and expert insights.",
    icon: Mic,
  },
  {
    title: "Advertising & Promotions",
    description: "Targeted radio ads, promotions, and media campaigns for maximum reach.",
    icon: ShoppingCart,
  },
  {
    title: "Video Production",
    description: "High-quality video content including interviews, event coverage, and branded media.",
    icon: Video,
  },
  {
    title: "Community Engagement",
    description: "Fostering community growth through events, social initiatives, and listener interactions.",
    icon: Users,
  },
];

export function ServicesPage() {
  return (
    <section className="relative w-full bg-[#000E15] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-primary mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative bg-gray-900 p-8 rounded-xl shadow-xl text-center transition-all duration-500 group hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-gray-400 mt-3">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
