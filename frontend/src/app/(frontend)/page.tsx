"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/common/Hero/Hero";
import { LiveNow } from "@/components/common/LiveNow";
import { NewsFeed } from "@/components/common/NewsFeed";
import { OurChannels } from "@/components/common/OurChannels";
import { OurServices } from "@/components/common/OurServices";
import { SubscribeCTA } from "@/components/common/SubscribeCTA";
import { Testimonials } from "@/components/common/Testimonials";
import { Loader } from "@/components/common/Loader";
import FloatingBubble from "@/components/common/FloatingBubble";

export default function Home() {
  return (
    <>
      <Loader />

      {/* ✅ Background Wrapper (Avoid `overflow-hidden` at root level) */}
      <div className="relative min-h-screen bg-background text-text">
        
        {/* ✅ Keep Animated Bubbles Under Everything */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          {Array.from({ length: 15 }).map((_, index) => (
            <FloatingBubble key={index} />
          ))}
        </div>

        {/* ✅ Digital Signature Overlay (Place Below Content) */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-40"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-black opacity-10" />
            <div className="absolute top-0 left-0 text-green-500 text-xl font-mono select-none">
              <p className="animate-pulse">10110101010101010101 1100101010101010</p>
              <p className="animate-pulse">Tetemeko Media Group</p>
            </div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-blue-300 text-lg font-mono select-none">
              <p className="animate-pulse">0101101010101010101</p>
              <p className="animate-pulse">Tetemeko Media Group</p>
            </div>
          </motion.div>
        </div>

        {/* ✅ Hero Section (Includes Navbar) */}
        <motion.div 
          className="relative z-10" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.2 }}
        >
          <Hero />
        </motion.div>

        {/* ✅ Sections (Keep Below Hero) */}
        <div className="space-y-0 relative z-10">
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

        {/* ✅ Footer (Lowest Layer) */}
        <Footer />
      </div>
    </>
  );
}

/* ✅ Animated Section Wrapper (Keeps Layout Organized) */
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
