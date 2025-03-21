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
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000); // Simulate loader time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div className="relative min-h-screen bg-background text-text overflow-x-hidden">
          
          {/* ✅ Floating Bubbles */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {Array.from({ length: 15 }).map((_, index) => (
              <FloatingBubble key={index} />
            ))}
          </div>

          {/* ✅ Hero Section with Zoom-Out Effect */}
          <motion.div 
            className="relative z-10 w-full max-w-screen overflow-hidden"
            initial={{ opacity: 0, scale: 1.2 }} // Start zoomed in
            animate={{ opacity: 1, scale: 1 }} // Smoothly zooms out
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Hero />
          </motion.div>

          {/* ✅ Sections with Zoom-In Effect */}
          <div className="space-y-0 relative z-10 w-full max-w-screen overflow-hidden">
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

          {/* ✅ Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

/* ✅ Animated Section Wrapper (Adds Zoom-In Transition) */
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.section
      className="w-full opacity-0 bg-gradient-to-b from-transparent via-[#f4f7fa] to-transparent"
      initial={{ opacity: 0, scale: 0.9 }} // Start slightly zoomed out
      whileInView={{ opacity: 1, scale: 1 }} // Zooms in smoothly
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
