"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import NewsList from "@/components/news/NewsList";
import Banner from "@/components/news/Banner";  // Import the Banner component

type Article = {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

const API_URL = (page: number) =>
    `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=6&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;

export default function NewsPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            if (!process.env.NEXT_PUBLIC_NEWS_API_KEY) {
                setError("API key is missing. Please check your .env file.");
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const res = await fetch(API_URL(page));
                const data = await res.json();

                console.log("Fetched Data:", data); // Log entire response for debugging

                if (res.status !== 200) {
                    throw new Error(`API Error: ${data.message || "Unknown error"}`);
                }

                if (!data.articles || !Array.isArray(data.articles)) {
                    throw new Error("Invalid articles data from API.");
                }

                setArticles((prev) => [...prev, ...data.articles]); // Append new articles
            } catch (error: unknown) {
                console.error("Error fetching news:", error);

                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred.");
                }
            }

            setLoading(false);
        };

        fetchArticles();
    }, [page]);

    // Infinite Scroll Logic
    const lastArticleRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (loading) {
                return;
            }
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setPage((prev) => prev + 1); // Load next page when last article is visible
                    }
                },
                { threshold: 1.0 }
            );
            if (node) {
                observer.current.observe(node);
            }
        },
        [loading]
    );

    return (
        <div className="container mx-auto p-6 mt-16"> {/* Added margin-top to avoid conflict with navbar */}
            {/* Banner Section */}
            <Banner /> {/* Using the Banner component */}

            <h1 className="text-3xl font-bold mb-6">Latest News</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <NewsList articles={articles} lastArticleRef={lastArticleRef} />
            {loading && <p className="text-center mt-4">Loading more news...</p>}
        </div>
    );
}
