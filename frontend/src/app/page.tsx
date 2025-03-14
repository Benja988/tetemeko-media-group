"use client";

import { motion } from "framer-motion";
import { About } from "@/components/About";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LiveNow } from "@/components/LiveNow";
import { NewsFeed } from "@/components/NewsFeed";
import { OurChannels } from "@/components/OurChannels";
import { OurServices } from "@/components/OurServices";
import { SubscribeCTA } from "@/components/SubscribeCTA";
import { Testimonials } from "@/components/Testimonials";
import { Loader } from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />

      {/* Background Wrapper with Floating Bubbles and Digital Signatures */}
      <div className="relative min-h-screen bg-[#F4F7FA] text-[#e0d7c6] overflow-hidden">
        {/* Animated Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute bg-blue-400 opacity-20 rounded-full"
              style={{
                width: `${Math.random() * 50 + 20}px`,
                height: `${Math.random() * 50 + 20}px`,
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["0%", "-100%"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Digital Signature Effect (Moving Digits / Binary Code) */}
        <div className="absolute inset-0 pointer-events-none opacity-50 z-10">
          <motion.div
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{
              background: "url('/digital-background.png') center center / cover no-repeat",
            }}
          >
            <div className="absolute top-0 left-0 text-green-500 text-xl font-mono select-none">
              <p className="animate-pulse">10110101010101010101 1100101010101010</p>
              <p className="animate-pulse">A1B2C3D4E5F6G7H8I9J0</p>
            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-blue-300 text-lg font-mono select-none">
              <p className="animate-pulse">0101101010101010101</p>
              <p className="animate-pulse">Z9X8Y7W6V5U4T3S2R1</p>
            </div>
          </motion.div>
        </div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Hero />
        </motion.div>

        {/* Sections (Now Without Space Between) */}
        <div className="space-y-0">
          <AnimatedSection delay={0.2}>
            <OurChannels />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <LiveNow />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <OurServices />
          </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <NewsFeed />
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <Testimonials />
          </AnimatedSection>
          <AnimatedSection delay={0.7}>
            <SubscribeCTA />
          </AnimatedSection>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

/* Animated Section Wrapper with Staggered Delays */
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.section
      className="w-full opacity-0 bg-gradient-to-b from-transparent via-[#f4f7fa] to-transparent"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
