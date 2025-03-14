"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Declare global window property for initMap
declare global {
  interface Window {
    initMap: () => void;
  }
}

export function ContactUs() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client
  }, []);

  const initMap = () => {
    if (window.google && window.google.maps && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -0.0022, lng: 34.5986 },
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: { lat: -0.0022, lng: 34.5986 },
        map,
        title: "Maseno, Kisumu-Kenya",
      });
    }
  };

  useEffect(() => {
    if (isClient) {
      // Dynamically load the Google Maps API
      const loadGoogleMapsScript = () => {
        if (!document.querySelector("#google-maps-script")) {
          const script = document.createElement("script");
          script.id = "google-maps-script";
          script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      };

      // Initialize the map once the script is loaded
      if (window.google && window.google.maps) {
        initMap();
      } else {
        loadGoogleMapsScript();
        window.initMap = initMap;
      }
    }
  }, [isClient]);

  const contactItems = [
    {
      icon: <Mail className="text-yellow-400 w-12 h-12 mb-2" />,
      title: "Email",
      detail: "info@tetemekomedia.com",
    },
    {
      icon: <Phone className="text-yellow-400 w-12 h-12 mb-2" />,
      title: "Phone",
      detail: "+123 456 7890",
    },
    {
      icon: <MapPin className="text-yellow-400 w-12 h-12 mb-2" />,
      title: "Location",
      detail: "Maseno, Kisumu-Kenya",
    },
    {
      icon: <Clock className="text-yellow-400 w-12 h-12 mb-2" />,
      title: "Business Hours",
      detail: "Mon - Fri: 9AM - 6PM",
    },
    {
      icon: <Globe className="text-yellow-400 w-12 h-12 mb-2" />,
      title: "Website",
      detail: "www.tetemekomedia.com",
    },
  ];

  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
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
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.detail}</p>
            </motion.div>
          ))}
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

        {/* Google Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">📍 Our Location</h3>
          <div
            ref={mapRef}
            className="w-full h-96 bg-gray-800 rounded-lg shadow-md"
          ></div>
        </div>
      </div>
    </section>
  );
}
