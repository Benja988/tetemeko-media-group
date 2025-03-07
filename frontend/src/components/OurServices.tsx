"use client";

import { motion } from "framer-motion";
import { Mic, Radio, Newspaper, ShoppingCart, Users, Video } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Radio Broadcasting",
    description: "We deliver high-quality radio content, live shows, and engaging programs across multiple stations.",
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
    description: "Our podcasts cover various topics, from entertainment to deep conversations with industry experts.",
    icon: <Mic className="w-12 h-12 text-primary" />,
  },
  {
    id: 4,
    title: "Advertising & Promotions",
    description: "Reach your audience through targeted radio ads, promotions, and media campaigns.",
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
  },
  {
    id: 5,
    title: "Video Production",
    description: "We create high-quality video content, including interviews, event coverage, and branded media.",
    icon: <Video className="w-12 h-12 text-primary" />,
  },
  {
    id: 6,
    title: "Community Engagement",
    description: "We foster community growth through events, social initiatives, and listener interactions.",
    icon: <Users className="w-12 h-12 text-primary" />,
  },
];

export function OurServices() {
  return (
    <section className="w-full bg-[#000E15] text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
