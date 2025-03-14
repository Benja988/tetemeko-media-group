"use client";

import Image from "next/image";

interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
    stock: number;
}

export default function ProductCard({ id, title, description, price, category, thumbnail, rating, stock }: ProductProps) {
    return (
        <div className="border border-gray-300 rounded-lg shadow-xl p-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:scale-105 transform transition-all duration-300">
            <Image src={thumbnail} alt={title} width={200} height={200} className="rounded-md w-full h-48 object-cover" />
            <h3 className="font-extrabold text-white text-xl mt-3">{title}</h3>
            <p className="text-gray-200 text-sm mt-2">{description.slice(0, 60)}...</p>
            <p className="text-yellow-400 font-semibold mt-1">⭐ {rating} / 5</p>
            <p className="text-white font-semibold mt-2">${price}</p>
            <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-500 mt-4 transition-all">
                Add to Cart
            </button>
        </div>
    );
}
