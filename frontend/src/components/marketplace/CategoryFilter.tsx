"use client";

interface Category {
  slug: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 w-full md:w-1/4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
      <ul>
        <li
          className={`p-3 cursor-pointer rounded-md transition-all duration-200 hover:bg-gray-100 ${
            selectedCategory === "" ? "font-semibold text-gray-900 bg-gray-100" : "text-gray-700"
          }`}
          onClick={() => setSelectedCategory("")}
        >
          All Categories
        </li>

        {categories.map((category) => (
          <li
            key={category.slug}
            className={`p-3 cursor-pointer rounded-md transition-all duration-200 hover:bg-gray-100 ${
              selectedCategory === category.slug ? "font-semibold text-gray-900 bg-gray-100" : "text-gray-700"
            }`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
