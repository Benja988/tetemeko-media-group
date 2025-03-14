"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/marketplace/SearchBar";
import ProductCard from "@/components/marketplace/ProductCard";
import HeroBanner from "@/components/marketplace/HeroBanner";
import { Footer } from "@/components/Footer";
import CategoryFilter from "@/components/marketplace/CategoryFilter";

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

  useEffect(() => {
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

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
  );

  return (
    <>
      <div className="container mx-auto p-6">
        {/* Hero Banner */}
        {products.length > 0 && <HeroBanner products={products.slice(0, 5)} />}

        {/* Layout: Categories Left, Search & Products Right */}
        <div className="flex flex-col md:flex-row mt-6">
          {/* Categories Sidebar */}
          <CategoryFilter
            categories={categories} // Now passing categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Search & Products Section */}
          <div className="flex-1 ml-0 md:ml-6">
            {/* Search Bar */}
            <div className="flex justify-end mb-6">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Products Grid */}
            <div className="mb-12">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 mt-6">No products found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
