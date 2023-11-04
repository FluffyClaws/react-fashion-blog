import { useState } from "react";
import { CategorizedItem } from "../types/types";

const useCategoryFilter = <T extends CategorizedItem>(
  initialCategory: string,
  allCategories: string[],
  items: T[]
) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter((item) =>
    selectedCategory === "All"
      ? true
      : item.category.toUpperCase() === selectedCategory.toUpperCase()
  );

  const categoryCounts = allCategories.map((category) => ({
    name: category,
    count:
      category === "All"
        ? items.length
        : items.filter(
            (item) => item.category.toUpperCase() === category.toUpperCase()
          ).length,
  }));

  return {
    selectedCategory,
    handleCategoryChange,
    filteredItems,
    categoryCounts,
  };
};

export default useCategoryFilter;
