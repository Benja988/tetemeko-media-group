"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const toggleDropdown = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <header className="w-full bg-[#00273b] text-white shadow-md relative z-50">
            <div className="container mx-auto flex items-center justify-between h-16 px-6">
                {/* Logo + Company Name */}
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/logo.jpg" alt="Tetemeko Media Group" width={50} height={50} className="h-12 w-auto" />
                    <span className="text-xl font-semibold tracking-wide whitespace-nowrap">Tetemeko Media Group</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 font-medium">
                    <Button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                        Listen Live
                    </Button>

                    {/** Navigation Links */}
                    {[
                        { name: "Programs", links: ["/radio-shows", "/tv-shows", "/podcasts", "/schedule"] },
                        { name: "News", links: ["/latest-news", "/blogs", "/breaking-news"] },
                        { name: "Marketplace", link: "/marketplace" },
                        { name: "Community", links: ["/listener-club", "/events", "/membership"] },
                        { name: "Advertise", links: ["/sponsorship", "/advertise"] },
                        { name: "Contact", links: ["/contact", "/careers"] },
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            {item.link ? (
                                <Link href={item.link} className="hover:text-gray-300">
                                    {item.name}
                                </Link>
                            ) : (
                                <button className="hover:text-gray-300 flex items-center space-x-1" onClick={() => toggleDropdown(item.name)}>
                                    <span>{item.name}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                            )}
                            {dropdownOpen === item.name && item.links && (
                                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                                    {item.links.map((link, idx) => (
                                        <Link key={idx} href={link} className="block px-4 py-2 hover:bg-gray-200">
                                            {link.replace("/", "").replace("-", " ")}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#00273b] text-white shadow-md z-50">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        {[
                            { name: "Programs", links: ["/radio-shows", "/tv-shows", "/podcasts", "/schedule"] },
                            { name: "News", links: ["/latest-news", "/blogs", "/breaking-news"] },
                            { name: "Marketplace", link: "/marketplace" },
                            { name: "Community", links: ["/listener-club", "/events", "/membership"] },
                            { name: "Advertise", links: ["/sponsorship", "/advertise"] },
                            { name: "Contact", links: ["/contact", "/careers"] },
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                {item.link ? (
                                    <Link href={item.link} className="block py-2 hover:text-gray-300">
                                        {item.name}
                                    </Link>
                                ) : (
                                    <>
                                        <button className="flex justify-between items-center w-full py-2" onClick={() => toggleDropdown(item.name)}>
                                            <span>{item.name}</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {dropdownOpen === item.name && item.links && (
                                            <div className="pl-4 py-2 space-y-2 bg-[#003b55] rounded-md">
                                                {item.links.map((link, idx) => (
                                                    <Link key={idx} href={link} className="block px-4 py-2 hover:bg-gray-200">
                                                        {link.replace("/", "").replace("-", " ")}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                        <Button className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
                            Listen Live
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
