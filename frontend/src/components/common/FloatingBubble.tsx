import { motion } from "framer-motion";

export default function FloatingBubble () {
  const size = Math.random() * 50 + 20; // Random size between 20px and 70px
  const left = Math.random() * 100; // Random horizontal position
  const bottom = Math.random() * 100; // Random vertical position
  const duration = Math.random() * 5 + 4; // Random animation duration
  const delay = Math.random() * 3; // Random delay

  return (
    <motion.div
      className="absolute bg-blue-400 opacity-20 rounded-full"
      style={{ width: `${size}px`, height: `${size}px`, left: `${left}%`, bottom: `${bottom}%` }}
      animate={{ y: ["0%", "-100%"], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
};
