"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { BookingPopup } from "@/components/about/BookingPopup";

export function CallToAction() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-12 bg-primary text-white text-center">
      <motion.h3
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Book Your Service Today!
      </motion.h3>
      <motion.p
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Whether you need professional media services, advertising, or consultation, schedule a session with us now.
      </motion.p>
      <Button 
        className="bg-white text-black px-8 py-3 text-lg rounded-lg"
        onClick={() => setIsPopupOpen(true)}
      >
        Book Now
      </Button>
      {isPopupOpen && <BookingPopup onClose={() => setIsPopupOpen(false)} />}
    </section>
  );
}
