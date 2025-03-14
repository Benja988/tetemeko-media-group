"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";  // Import LucideIcon type

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;  // Accepts Lucide Icon component
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      key={title}
      className="relative bg-gray-100 p-8 rounded-xl shadow-xl text-center transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:bg-[#F0F0F0]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="flex justify-center mb-6">
        <Icon className="w-14 h-14 text-yellow-500 transition-all duration-300 group-hover:text-yellow-600" />
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-lg">{description}</p>
    </motion.div>
  );
}
