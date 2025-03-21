"use client";

import { motion } from "framer-motion";
import { LucideIcon, Mic, Radio, Newspaper, ShoppingCart, Users, Video } from "lucide-react";
import { services } from "../../data/services";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  radio: Radio,
  newspaper: Newspaper,
  mic: Mic,
  "shopping-cart": ShoppingCart,
  video: Video,
  users: Users,
};


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
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                className="relative bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon with Dynamic Color */}
                <div className="flex justify-center items-center mb-6 w-16 h-16 bg-white rounded-full shadow-md ring-2 ring-gray-300">
                  <IconComponent className={`w-14 h-14 ${service.color}`} />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mt-3">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
