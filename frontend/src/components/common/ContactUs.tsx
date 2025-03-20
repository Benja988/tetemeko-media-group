"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactUs() {
  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📞 Get in Touch with Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? Contact us and let&apos;s connect!
        </motion.p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Mail className="text-yellow-400 w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400">info@tetemekomedia.com</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Phone className="text-yellow-400 w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-400">+123 456 7890</p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MapPin className="text-yellow-400 w-12 h-12 mb-2" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 mb-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <Button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">
            Send Message 🚀
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
