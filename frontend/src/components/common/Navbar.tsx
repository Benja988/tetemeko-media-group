"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [isPastHero, setIsPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero");
            if (heroSection) {
                const heroHeight = heroSection.offsetHeight;
                setIsPastHero(window.scrollY > heroHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDropdown = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <header
            className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
                isPastHero ? "bg-[#00273b] bg-opacity-90 shadow-md backdrop-blur-lg" : "bg-transparent"
            }`}
        >
            <div className="container max-w-screen-xl mx-auto flex items-center justify-between h-16 px-6">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.jpg" alt="Tetemeko Media Group" width={50} height={50} className="h-12 w-auto" />
                    <span className="text-xl font-semibold tracking-wide text-white">Tetemeko Media Group</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-white">
                    <Button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                        Listen Live
                    </Button>
                    {["Programs", "News", "Marketplace", "Community", "Advertise", "Contact"].map((name) => (
                        <div key={name} className="relative">
                            <button
                                className="hover:text-gray-300 flex items-center space-x-1"
                                onClick={() => toggleDropdown(name)}
                            >
                                <span>{name}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {dropdownOpen === name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50"
                                    >
                                        <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</Link>
                                        <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-x-0 top-16 bg-[#00273b] text-white transition-all duration-300 ${
                    mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
                <div className="flex flex-col px-6 py-4 space-y-2">
                    {["Programs", "News", "Marketplace", "Community", "Advertise", "Contact"].map((name) => (
                        <div key={name} className="flex flex-col">
                            <button
                                className="flex justify-between items-center py-2 w-full"
                                onClick={() => toggleDropdown(name)}
                            >
                                <span>{name}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {dropdownOpen === name && (
                                <div className="ml-4 space-y-2">
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Submenu 1</Link>
                                    <Link href="/" className="block px-4 py-2 hover:bg-gray-200">Submenu 2</Link>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                        Listen Live
                    </Button>
                </div>
            </div>
        </header>
    );
}
