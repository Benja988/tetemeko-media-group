"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "/team/john.jpg", bio: "John is passionate about innovative storytelling..." },
  { name: "Sarah Smith", role: "Content Director", image: "/team/sarah.jpg", bio: "Sarah leads the content team, curating engaging experiences..." },
  { name: "Mark Lee", role: "Head of Operations", image: "/team/mark.jpg", bio: "Mark ensures smooth operations across all platforms..." },
];

export function TeamSpotlight() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h3
          className="text-4xl font-bold text-center text-black mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full shadow-lg mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900">{member.name}</h4>
              <p className="text-lg text-gray-500">{member.role}</p>
              <p className="text-sm text-gray-400 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
