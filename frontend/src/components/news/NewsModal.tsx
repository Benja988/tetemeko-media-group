"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";

interface NewsModalProps {
    article: {
        title: string;
        description: string;
        urlToImage?: string;
        url: string;
    };
    onClose: () => void;
}

export default function NewsModal({ article, onClose }: NewsModalProps) {
    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50 px-4"
            onClick={onClose} // Close when clicking outside
        >
            <div
                className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
                    <X size={24} />
                </button>

                {/* Image */}
                {article.urlToImage && (
                    <div className="relative w-full h-52 rounded-lg overflow-hidden">
                        <Image
                            src={article.urlToImage}
                            alt={article.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="mt-4">
                    <h2 className="text-xl font-bold text-gray-900">{article.title}</h2>
                    <p className="text-gray-700 mt-2">{article.description}</p>

                    {/* Read More */}
                    <div className="mt-4 flex justify-end">
                        <Link
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Read Full Article →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
