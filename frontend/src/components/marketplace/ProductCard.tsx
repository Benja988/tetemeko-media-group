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

export default function ProductCard({
  title,
  description,
  price,
  thumbnail,
  rating,
}: ProductProps) {
  return (
    <div className="border border-gray-200 rounded-xl shadow-lg p-5 bg-white hover:shadow-2xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <h3 className="font-semibold text-lg text-gray-900 mt-3">{title}</h3>
      <p className="text-gray-600 text-sm mt-2 leading-tight">
        {description.slice(0, 60)}...
      </p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-gray-900 font-semibold text-lg">${price}</p>
        <p className="text-yellow-500 font-medium text-sm flex items-center">
          ⭐ {rating} / 5
        </p>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 mt-4 transition-all">
        Add to Cart
      </button>
    </div>
  );
}
