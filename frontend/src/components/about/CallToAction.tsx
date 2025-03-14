"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-12 bg-primary text-white text-center">
      <motion.h3
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Ready to Join Us?
      </motion.h3>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Whether you’re looking to collaborate, advertise, or become part of our team, let’s connect and make an impact.
      </motion.p>
      <Button className="bg-white text-primary px-8 py-3 text-lg rounded-lg">
        Get Involved
      </Button>
    </section>
  );
}
