"use client";

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#000406] text-gray-300 py-12 mt-[-60px] relative z-20">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-text">Tetemeko Media Group</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Your home for radio, news, podcasts, and entertainment. Tune in & stay updated!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-5 h-5 text-text" />
              <a href="mailto:contact@tetemekomedia.com" className="hover:text-texthover transition">
                contact@tetemekomedia.com
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-texthover" />
              <a href="tel:+1234567890" className="hover:text-texthover transition">
                +123 456 7890
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-texthover transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-texthover transition">About Us</Link></li>
            <li><Link href="/news" className="hover:text-texthover transition">News & Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-texthover transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-gray-400 hover:texthover transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-gray-400 hover:texthover transition" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-gray-400 hover:texthover transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
              <Youtube className="w-6 h-6 text-gray-400 hover:texthover transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 text-center pt-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tetemeko Media Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
