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
    <section className="w-full bg-[#000E15] text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Latest News & Blogs
        </h2>

        <div className="flex flex-col gap-10">
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className={`flex flex-col md:flex-row items-center gap-6 bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full md:w-1/2 h-64 relative">
                {isClient && (
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              </div>

              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-2xl font-bold">{article.title}</h3>
                <p className="text-gray-400 mt-3 leading-relaxed">{article.excerpt}</p>

                <Button
                  variant="outline"
                  className="mt-5 px-6 py-3 border-primary text-white hover:bg-primary hover:text-black transition-all duration-300"
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
