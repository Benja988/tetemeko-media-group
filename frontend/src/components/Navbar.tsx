"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";
import ContactInfo from "./ContactInfo";
import { useRouter } from "next/navigation";


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full fixed top-0 left-0 z-50">
            {/* 🔹 Contact Info Bar */}
            {/* <ContactInfo /> */}

            {/* 🔹 Main Navbar */}
            <header
                className={`w-full transition-all duration-300 px-6 ${isScrolled ? "bg-black/80 text-white shadow-md" : "bg-transparent text-white"
                    }`}
            >
                <div className="container mx-auto flex items-center justify-between py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <AnimatedLogo />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 font-medium">
                        <Link href="/about" className="hover:text-yellow-400">About Us</Link>
                        <Link href="/services" className="hover:text-yellow-400">Services</Link>
                        <Link href="/marketplace" className="hover:text-yellow-400">Marketplace</Link>
                        <Link href="/contact" className="hover:text-yellow-400">Contact Us</Link>
                        <Link href="/news" className="hover:text-yellow-400">News & Blogs</Link> {/* Updated Link */}
                    </nav>

                    {/* CTA & Mobile Menu Toggle */}
                    <div className="flex items-center space-x-4">
                        <Button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400">
                            Listen Live
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden bg-black text-white text-center py-4 space-y-4">
                        <Link href="/about" className="block hover:text-yellow-400">About Us</Link>
                        <Link href="/services" className="block hover:text-yellow-400">Services</Link>
                        <Link href="/marketplace" className="block hover:text-yellow-400">Marketplace</Link>
                        <Link href="/contact" className="block hover:text-yellow-400">Contact Us</Link>
                        <Link href="/news" className="block hover:text-yellow-400">News & Blogs</Link> {/* Updated Link */}
                    </nav>
                )}
            </header>
        </div>
    );
}
