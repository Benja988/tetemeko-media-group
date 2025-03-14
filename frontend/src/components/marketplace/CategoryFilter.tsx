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

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
    const getButtonClasses = (isSelected: boolean) =>
        `px-4 py-2 rounded-md transition-all ${
            isSelected ? "bg-yellow-500 text-black font-semibold shadow-md" : "bg-gray-200 hover:bg-gray-300"
        }`;

    return (
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button
                className={getButtonClasses(selectedCategory === "")}
                onClick={() => setSelectedCategory("")}
                aria-pressed={selectedCategory === ""}
                role="button"
            >
                All
            </button>
            {categories.map((category, index) => {
                const slug = typeof category.slug === "string" ? category.slug : `category-${index}`;
                return (
                    <button
                        key={slug}
                        className={getButtonClasses(selectedCategory === slug)}
                        onClick={() => setSelectedCategory(slug)}
                        aria-pressed={selectedCategory === slug}
                        role="button"
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}
