"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/marketplace/SearchBar";
import ProductCard from "@/components/marketplace/ProductCard";
import { ChevronDown, ChevronRight } from "lucide-react";
import HeroBanner from "@/components/marketplace/HeroBanner";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    rating: number;
    stock: number;
}

interface Category {
    slug: string;
    name: string;
    subcategories?: { slug: string; name: string }[];
}

export default function MarketplacePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
// sourcery skip: avoid-function-declarations-in-blocks
        async function fetchData() {
            try {
                const [productsRes, categoriesRes] = await Promise.all([
                    fetch("https://dummyjson.com/products"),
                    fetch("https://dummyjson.com/products/categories"),
                ]);

                if (!productsRes.ok || !categoriesRes.ok) {
                    throw new Error("Failed to fetch products or categories");
                }

                const productsData = await productsRes.json();
                const categoriesData = await categoriesRes.json();

                setProducts(productsData.products || []);

                // Convert simple category list into category + subcategory format
                if (Array.isArray(categoriesData)) {
                    setCategories(
                        categoriesData.map((category, index) => ({
                            slug: typeof category === "string" ? category : `category-${index}`,
                            name: typeof category === "string" ? category : `Category ${index + 1}`,
                            subcategories: [
                                { slug: `${category}-sub1`, name: `${category} - Subcategory 1` },
                                { slug: `${category}-sub2`, name: `${category} - Subcategory 2` },
                            ],
                        }))
                    );
                } else {
                    console.error("Invalid categories format:", categoriesData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory ? product.category === selectedCategory : true)
    );

    const toggleCategoryExpansion = (slug: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [slug]: !prev[slug],
        }));
    };

    return (
        <div className="container mx-auto p-6">
            {/* Hero Banner */}
            {products.length > 0 && <HeroBanner products={products.slice(0, 5)} />}
            {/* Search Bar & Category Dropdown */}
            <div className="flex justify-between items-center">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {/* Category Dropdown (Pluralsight Style) */}
                <div className="relative">
                    <button
                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        Categories <ChevronDown className="ml-2 w-5 h-5" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                            <ul>
                                {/* All Categories Option */}
                                <li
                                    className={`p-3 cursor-pointer hover:bg-gray-100 transition ${
                                        selectedCategory === "" ? "font-semibold text-gray-900" : ""
                                    }`}
                                    onClick={() => {
                                        setSelectedCategory("");
                                        setIsDropdownOpen(false);
                                    }}
                                >
                                    All Categories
                                </li>

                                {/* Render Categories with Subcategories */}
                                {categories.map((category) => (
                                    <li key={category.slug} className="relative">
                                        <div
                                            className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-100 transition"
                                            onClick={() => toggleCategoryExpansion(category.slug)}
                                        >
                                            <span
                                                className={`${
                                                    selectedCategory === category.slug
                                                        ? "font-semibold text-gray-900"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {category.name}
                                            </span>
                                            {category.subcategories && (
                                                <ChevronRight
                                                    className={`w-4 h-4 transform transition-transform ${
                                                        expandedCategories[category.slug] ? "rotate-90" : ""
                                                    }`}
                                                />
                                            )}
                                        </div>

                                        {/* Subcategories Dropdown */}
                                        {expandedCategories[category.slug] && category.subcategories && (
                                            <ul className="ml-4 border-l-2 border-gray-200">
                                                {category.subcategories.map((sub) => (
                                                    <li
                                                        key={sub.slug}
                                                        className="p-3 cursor-pointer hover:bg-gray-100 transition text-gray-600"
                                                        onClick={() => {
                                                            setSelectedCategory(sub.slug);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        {sub.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-6">No products found.</p>
            )}
        </div>
    );
}
