import { useMemo } from "react";
import NewsCard from "./NewsCard";

interface NewsListProps {
    articles: {
        title: string;
        description: string;
        urlToImage?: string;
        url: string;
    }[];
    lastArticleRef?: (node: HTMLDivElement | null) => void;
}

export default function NewsList({ articles, lastArticleRef }: NewsListProps) {
    // Memoized article list to prevent unnecessary re-renders
    const renderedArticles = useMemo(() => {
        return articles.map((article, index) => {
            const isLast = index === articles.length - 1;

            // Ensure key is always unique
            const uniqueKey = article.url ? `${article.url}-${index}` : `article-${index}`;

            return (
                <div key={uniqueKey} ref={isLast ? lastArticleRef : null}>
                    <NewsCard article={article} />
                </div>
            );
        });
    }, [articles, lastArticleRef]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.length > 0 ? (
                renderedArticles
            ) : (
                <div className="text-center text-gray-600 py-10">
                    <p className="text-lg font-semibold">No articles available.</p>
                    <p className="text-sm text-gray-500">Please check back later.</p>
                </div>
            )}
        </div>
    );
}
