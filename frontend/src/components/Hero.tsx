"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-black overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster="/fallback-image.jpg" // Add a poster for better UX
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        aria-hidden="true"
      >
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7 }}
        >
          {/* Uncomment if you want to add the logo */}
          {/* <Image 
            src="/tetemeko-logo.png"
            alt="Tetemeko Media Logo"
            width={300}
            height={100}
            className="mb-4"
          /> */}
        </motion.div>

        {/* Title & Slogan */}
        <motion.h1 
          className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We Have The Copy
        </motion.h1>
        <motion.p 
          className="text-gray-300 text-lg md:text-xl mt-2 max-w-2xl"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Your #1 Source for Radio, News & Entertainment
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="mt-6 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button className="bg-primary text-white px-6 py-3 text-lg hover:bg-primary/90 transition-all">
            🎧 Listen Live
          </Button>
          <Button variant="outline" className="text-white border-white px-6 py-3 text-lg hover:bg-white hover:text-black transition-all">
            Explore More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
