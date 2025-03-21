import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Navbar } from "../Navbar";

const services = [
    { title: "Exclusive Shows", description: "Top-rated live shows and on-demand content." },
    { title: "Breaking News", description: "Instant, real-time, and verified news updates." },
    { title: "Live Sports", description: "Catch live broadcasts and latest scores." },
    { title: "Podcasts & Interviews", description: "Exclusive interviews and engaging podcasts." },
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
    <section className="relative w-full min-h-screen flex flex-col justify-between text-white overflow-hidden">
      <Navbar />

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover rounded-b-3xl"
          src="/background1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
          Stream live radio, access breaking news, and explore exclusive content in one seamless experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg">
            Start Listening
          </Button>
        </motion.div>
      </div>

      {/* Services Card (Centered with Flexbox) */}
      <div className="relative z-10 flex justify-center mt-12 mb-8">
        <motion.div
          className="bg-white text-gray-900 shadow-2xl w-11/12 sm:w-[500px] max-w-lg p-6 sm:p-10 flex flex-col items-center rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
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
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {services[currentService].title}
              </h3>
              <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed">
                {services[currentService].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
