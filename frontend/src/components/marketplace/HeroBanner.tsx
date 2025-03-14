"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

interface HeroBannerProps {
    products: Product[];
}

export default function HeroBanner({ products }: HeroBannerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(interval);
    }, [products.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    return (
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-75"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-8 bg-gradient-to-r from-black/50 via-black/20 to-transparent">
                        <h2 className="text-white text-3xl font-bold max-w-lg">{product.title}</h2>
                        <p className="text-gray-200 max-w-lg mt-2">{product.description}</p>
                        <span className="text-yellow-400 font-semibold text-xl mt-2">${product.price}</span>
                        <button className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition">
                            Shop Now
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                onClick={prevSlide}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
                onClick={nextSlide}
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
}
