import Image from "next/image";

interface NewsDetailsProps {
    article: {
        title: string;
        content: string;
        urlToImage: string;
        publishedAt: string;
        author?: string | null;  // Allow both string and null
    };
}

export default function NewsDetails({ article }: NewsDetailsProps) {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">{article.title}</h1>
            {article.urlToImage && (
                <Image
                    src={article.urlToImage}
                    alt={article.title}
                    width={800}  // Set appropriate width for the image
                    height={320} // Set appropriate height for the image
                    className="w-full h-80 object-cover mt-4 rounded-md"
                />
            )}
            <p className="text-gray-600 mt-2">Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
            {article.author && <p className="text-gray-500">By {article.author}</p>}
            <p className="mt-4 text-gray-700">{article.content}</p>
        </div>
    );
}
