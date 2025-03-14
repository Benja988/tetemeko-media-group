"use client";

import { useState } from "react";
import Image from "next/image";
import NewsModal from "./NewsModal"; // Import the modal component

interface NewsCardProps {
    article: {
        title: string;
        description: string;
        urlToImage?: string;
        url: string;
    };
}

export default function NewsCard({ article }: NewsCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="w-full max-w-4xl mx-auto py-4 border-b border-gray-300 last:border-none">
                <div className="flex items-center gap-6 bg-white shadow-md p-4 rounded-lg transition-transform transform hover:scale-[1.02] duration-300">
                    {/* Image Section (Short Height, Wide) */}
                    <div className="relative w-48 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                        {article.urlToImage ? (
                            <Image
                                src={article.urlToImage}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 line-clamp-2">{article.title}</h2>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{article.description}</p>

                        {/* Read More Button */}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-3 inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Read More →
                        </button>
                    </div>
                </div>
            </div>

            {/* News Modal */}
            {isModalOpen && <NewsModal article={article} onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
