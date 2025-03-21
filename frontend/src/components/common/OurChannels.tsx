"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Music, Waves } from "lucide-react";

const channels = [
  {
    name: "Radio Piny Luo",
    icon: <Radio size={36} className="text-blue-500" />,
    link: "/radio-one",
    description: "Trending music, talk shows, and live news updates.",
  },
  {
    name: "Music Live",
    icon: <Music size={36} className="text-purple-500" />,
    link: "/music-live",
    description: "Live performances, exclusive tracks, and artist interviews.",
  },
  {
    name: "Classic Vibes",
    icon: <Waves size={36} className="text-red-500" />,
    link: "/classic-vibes",
    description: "Bringing back timeless classics and nostalgic tunes.",
  },
];

const fullDescription = `Tetemeko Media Group brings you a curated selection of radio stations for news, entertainment, and deep conversations. Whether you love music, culture, or discussions, we have a channel for you.

- Radio Piny Luo: 24/7 news, talk shows, and community updates.
- Music Live: Live performances, artist interviews, and exclusive tracks.
- Classic Vibes: Bringing back timeless classics and nostalgic tunes.

Tune in now and discover the sound of the future!`;

export function OurChannels() {
  const [currentChannel, setCurrentChannel] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  // Rotating channel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChannel((prev) => (prev + 1) % channels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect for description
  useEffect(() => {
    let charIndex = 0;
    setTypedText("");
    setTypingComplete(false);

    const typeEffect = setInterval(() => {
      if (charIndex < fullDescription.length) {
        setTypedText(fullDescription.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeEffect);
        setTypingComplete(true);
      }
    }, 40);

    return () => clearInterval(typeEffect);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">

        {/* ✅ Left Section with Full Background Image */}
        <div
          className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-10 rounded-xl"
          style={{
            backgroundImage: "url('/bg12.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* ✅ Title with More Spacing */}
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-12">
            Our Channels
          </h2>

          <div className="relative w-full h-52 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.a
                key={channels[currentChannel].name}
                href={channels[currentChannel].link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col items-center gap-3 p-6 w-80 text-center overflow-hidden 
        bg-white border border-gray-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-indigo-400 
        transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="text-gray-800 flex-shrink-0"
                >
                  {channels[currentChannel].icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {channels[currentChannel].name}
                </h3>
                <p className="text-sm text-gray-600">{channels[currentChannel].description}</p>
              </motion.a>
            </AnimatePresence>
          </div>
        </div>


        {/* ✅ Right: Typing Effect for Description */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Explore Our Channels
          </h3>

          {/* ✅ Typing Effect */}
          <p className="text-md leading-relaxed text-gray-700 whitespace-pre-line">
            {typedText}
            {!typingComplete && <span className="animate-blink">|</span>}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
