import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";

const services = [
  { 
    title: "Exclusive Shows", 
    description: "Experience a diverse lineup of premium, high-quality live broadcasts and on-demand content, tailored to keep you entertained and informed." 
  },
  { 
    title: "Breaking News", 
    description: "Stay ahead with real-time, fact-checked news updates from trusted sources, delivering critical information as it happens." 
  },
  { 
    title: "Live Sports", 
    description: "Catch every moment of the action with uninterrupted live sports coverage, real-time commentary, and instant score updates." 
  },
  { 
    title: "Podcasts & Interviews", 
    description: "Dive into thought-provoking discussions, exclusive interviews, and in-depth storytelling from industry leaders and experts." 
  }
];


export function Hero() {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden">
      <Navbar /> {/* Sticky Navbar without background color */}

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video className="w-full h-full object-cover rounded-b-3xl" src="/background1.mp4" autoPlay loop muted playsInline />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl mx-auto mt-24">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We Have The Copy
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-200 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Stream live radio, catch up on the latest news, and explore top-rated shows in one place.
        </motion.p>
      </div>

      {/* Key Highlights Section */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10 px-6">
        <motion.div
          className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white">📡 24/7 Live Streaming</h3>
          <p className="text-gray-300 text-sm mt-2">Never miss your favorite shows.</p>
        </motion.div>
        <motion.div
          className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white">🎧 100+ Exclusive Podcasts</h3>
          <p className="text-gray-300 text-sm mt-2">Dive into conversations that matter.</p>
        </motion.div>
        <motion.div
          className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-white">⚡ Breaking News Alerts</h3>
          <p className="text-gray-300 text-sm mt-2">Stay informed in real-time.</p>
        </motion.div>
      </div>

      {/* Services Card (Rotating Features) */}
      <div className="relative z-10 flex justify-center mt-12 mb-8">
        <motion.div
          className="bg-primary text-gray-900 shadow-2xl w-11/12 sm:w-[500px] max-w-lg p-6 sm:p-10 flex flex-col items-center rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {services[currentService].title}
              </h3>
              <p className="text-white mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
                {services[currentService].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
