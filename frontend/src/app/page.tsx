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

      {/* Background Wrapper */}
      <div className="min-h-screen bg-[#1c4065] text-[#e0d7c6]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Hero />
        </motion.div>

        {/* Sections */}
        <div className="">
          {/* <AnimatedSection delay={0.1}>
            <h2 className="section-title">🌍 About Us</h2>
            <About />
          </AnimatedSection> */}

          <AnimatedSection delay={0.2}>
            {/* <h2 className="section-title">🎧 Our Channels</h2> */}
            <OurChannels />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            {/* <h2 className="section-title">🔴 Live Now</h2> */}
            <LiveNow />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            {/* <h2 className="section-title">🚀 Our Services</h2> */}
            <OurServices />
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            {/* <h2 className="section-title">📰 Latest News</h2> */}
            <NewsFeed />
          </AnimatedSection>

          {/* <AnimatedSection delay={0.6}>
            <h2 className="section-title">🎙️ Testimonials</h2>
            <Testimonials />
          </AnimatedSection> */}

          <AnimatedSection delay={0.7}>
            {/* <h2 className="section-title">📧 Subscribe</h2> */}
            <SubscribeCTA />
          </AnimatedSection>

          {/* <AnimatedSection delay={0.8}>
            <h2 className="section-title">📞 Contact Us</h2>
            <ContactUs />
          </AnimatedSection> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

/* Animated Section Wrapper with Staggered Delays */
const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.section
      className="w-full opacity-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};
