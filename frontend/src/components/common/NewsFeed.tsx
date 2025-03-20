"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section
      className="w-full py-20 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/b7.jpg')",
        WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
      }}
    >

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-white tracking-tight mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News & Blogs
        </motion.h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-white/10 backdrop-blur-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              {isClient && (
                <div className="relative w-full h-64 overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.1, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-3xl"
                      priority={article.id === 1}
                    />
                  </motion.div>
                </div>
              )}

              {/* Content */}
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-10 flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/news"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition-all duration-300"
            >
              Show More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
