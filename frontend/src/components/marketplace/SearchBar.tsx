"use client";

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder="Search for products..."
            className="border p-3 rounded-md w-full md:w-1/3 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}
