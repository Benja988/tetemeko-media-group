"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NewsDetails from "@/components/news/NewsDetails";

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

export default function ArticlePage() {
    const { slug } = useParams();
    const [article, setArticle] = useState<Article | null>(null); // Add type for useState

    useEffect(() => {
        const storedArticles: Article[] = JSON.parse(sessionStorage.getItem("articles") || "[]"); // Explicitly type storedArticles
        const foundArticle = storedArticles.find((a: Article) => 
            a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
        );
        setArticle(foundArticle || null);
    }, [slug]);

    if (!article) return <p>Loading...</p>;

    return <NewsDetails article={article} />;
}
