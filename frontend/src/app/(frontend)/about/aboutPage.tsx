"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CompanyHistory } from "@/components/about/CompanyHistory";
import { TeamSpotlight } from "@/components/about/TeamSpotlight";
import { Achievements } from "@/components/about/Achievements";
import { UniqueValueProposition } from "@/components/about/UniqueValueProposition";
import { PressCoverage } from "@/components/about/PressCoverage";
import { CallToAction } from "@/components/about/CallToAction";

export function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="w-full text-black">
      {/* Main Hero Section */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/b_4.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        <div className="container relative mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Section - Image with Overlap Effect */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-lg">
                {isClient && (
                  <Image
                    src="/broadcast.jpg"
                    alt="Tetemeko Media Office"
                    width={600}
                    height={400}
                    className="rounded-3xl shadow-lg"
                  />
                )}
                <motion.div
                  className="absolute -top-8 -left-8 w-28 h-28 bg-primary/30 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/40 rounded-full blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                ></motion.div>
              </div>
            </motion.div>

            {/* Right Section - Content */}
            <motion.div
              className="space-y-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-extrabold text-primary leading-tight">
                About <span className="text-black">Tetemeko</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                At <strong>Tetemeko Media Group</strong>, we harness the power of <strong>storytelling</strong> to inform, engage, and inspire.
              </p>

              {/* Expanded Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                {[ 
                  {
                    title: "🎙️ Our Mission",
                    description:
                      "To inform, entertain, and connect communities through high-quality journalism.",
                  },
                  {
                    title: "🌍 Our Reach",
                    description:
                      "With millions of listeners worldwide, we provide vital information through radio, podcasts, and live broadcasts.",
                  },
                  {
                    title: "📱 Our Digital Platforms",
                    description:
                      "Expanding beyond traditional broadcasting, Tetemeko offers live streaming, on-demand content, and interactive platforms.",
                  },
                  {
                    title: "🎧 Our Team",
                    description:
                      "A talented group of professionals bringing passion and innovation to every project.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ rotate: 1 }}
                  >
                    <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.1 }}>
                {/* <Button className="bg-primary text-white px-8 py-3 text-lg rounded-lg shadow-md hover:bg-primary/90 transition">
                  Learn More
                </Button> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <CompanyHistory />
      <TeamSpotlight />
      <Achievements />
      <UniqueValueProposition />
      <PressCoverage />
      <CallToAction />
    </div>
  );
}