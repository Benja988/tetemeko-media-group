"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface BookingPopupProps {
  onClose: () => void;
}

export function BookingPopup({ onClose }: BookingPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Book a Service
        </h2>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Service Needed */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-medium mb-1">Service Needed</label>
            <input
              type="text"
              name="service"
              placeholder="Describe the service you're interested in"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Preferred Date */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">Preferred Date</label>
            <input
              type="date"
              name="date"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-gray-600 font-medium mb-1">Additional Notes</label>
            <textarea
              name="message"
              placeholder="Provide any extra details or requests"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 md:col-span-2">
            <Button
              type="button"
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
