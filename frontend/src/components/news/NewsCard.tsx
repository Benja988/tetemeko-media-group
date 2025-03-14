import Link from "next/link";

interface NewsCardProps {
    article: {
        title: string;
        description: string;
        urlToImage?: string;
        url: string;
    };
}

export default function NewsCard({ article }: NewsCardProps) {
    return (
        <div className="flex flex-col bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="w-full h-40 bg-gray-200">
                <img
                    src={article.urlToImage || "/placeholder.jpg"} // Default image if none provided
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold line-clamp-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{article.description}</p>

                {/* Read More Link */}
                <div className="mt-auto pt-4">
                    <Link
                        href={article.url}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                        Read More →
                    </Link>
                </div>
            </div>
        </div>
    );
}
