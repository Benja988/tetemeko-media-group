"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const newsArticles = [
  {
    id: 1,
    title: "Tetemeko FM Expands to New Cities",
    excerpt: "Tetemeko FM is bringing its unique programming to more regions...",
    image: "/broadcast.jpg",
    link: "/news/tetemeko-expansion",
  },
  {
    id: 2,
    title: "Exclusive Interview with Top Artists",
    excerpt: "We sat down with the biggest names in the industry to talk about their music...",
    image: "/broadcast.jpg",
    link: "/news/artist-interview",
  },
  {
    id: 3,
    title: "How Digital Radio is Changing the Game",
    excerpt: "With the rise of online streaming, radio stations are adapting to the digital age...",
    image: "/broadcast.jpg",
    link: "/news/digital-radio",
  },
];

export function NewsFeed() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News & Blogs
        </motion.h2>

        {/* Articles in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Image */}
              <div className="w-full h-64 relative">
                {isClient && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-gray-900">{article.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{article.excerpt}</p>

                <Button
                  variant="outline"
                  className="mt-5 px-6 py-3 border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Read More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
