"use client";

import { ALL_PRODUCTS_QUERYResult, Category } from "@/sanity.types";
import { ProductGrid } from "@hgcle/ui-library";
import CategorySelector from "./CategorySelector";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/imageUrl";

type ProductsViewProps = {
  products: ALL_PRODUCTS_QUERYResult;
  categories: Category[];
};

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  const allCategories: Set<string> = new Set();
  for (const key in categories) {
    allCategories.add(categories[key]._id);
  }

  // `selectedCategories` Set contains all categories, when all checkboxes are enabled
  const [selectedCategories, setSelectedCategories] = useState(allCategories);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = event.target.id;
    const isChecked = event.target.checked;

    if (isChecked) {
      // If checkbox is checked, add category to `selectedCategories` Set — we don't need to care about duplicates with a Set object
      setSelectedCategories((prevSet) => {
        // We need to create a new Set, as React may not detect the change because the reference to`selectedCategories` remains the same
        const newSet = new Set(prevSet);
        newSet.add(categoryId);
        return newSet;
      });
    } else {
      // If checkbox is not checked, remove category from `selectedCategories` Set
      setSelectedCategories((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.delete(categoryId);
        return newSet;
      });
    }
  };

  // Filter `products` shown based on `selectedCategories`
  const filteredProducts: any[] = products.filter((product) => {
    if (!product.categories) {
      return false;
    }
    for (const category of product.categories) {
      if (selectedCategories.has(category._ref)) {
        return true;
      }
    }
  });

  // Restructure filteredProducts data to work with `<ProductGrid>` component
  for (let item of filteredProducts) {
    item.id = item._id;
    item.url = `/product/${item.slug?.current}`;
    if (item.description[0].children) {
      item.description = item.description[0].children[0].text.slice(0, 100);
    }
    if (item.imageGallery) {
      item.image = urlFor(item.imageGallery[0]).url();
      item.imageBlur = item.imageGallery[0].asset?.metadata?.lqip;
    }
  }

  return (
    <>
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        handleCheckboxChange={handleCheckboxChange}
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
};

export default ProductsView;
