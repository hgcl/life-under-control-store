"use client";

import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import CategorySelector from "./CategorySelector";
import { useState } from "react";

type ProductsViewProps = {
  products: Product[];
  categories: Category[];
};

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  const allCategories = categories.map((category) => category.slug?.current);

  // selectedCategories array contains all categories, when all checkboxes are enabled
  const [selectedCategories, setSelectedCategories] =
    useState<(string | undefined)[]>(allCategories);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categorySlug = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // If checkbox is checked, category should be in the selectedCategories array
      !selectedCategories.includes(categorySlug) &&
        setSelectedCategories((current) => [...current, categorySlug]);
    } else {
      // If checkbox is not checked, remove category from selectedCategories
      setSelectedCategories((current) =>
        current.filter((category) => category !== categorySlug)
      );
    }
  };

  // Define array of selected categories IDs (as `products` only references categories IDs)
  const selectedCategoriesIds = categories
    .filter((category) => selectedCategories.includes(category.slug?.current))
    .map((category) => category._id);

  // Filter products based on selected categories IDs
  const filteredProducts = products.filter((product) => {
    for (const category of product.categories) {
      if (selectedCategoriesIds.includes(category._ref)) {
        return true;
      }
    }
  });

  console.log(selectedCategories);

  return (
    <div>
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        onChange={handleCheckboxChange}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default ProductsView;
