"use client";

import CategorySelector from "../CategorySelector/CategorySelector";
import {
  filterProducts,
  handleCheckboxChange,
  restructureProducts,
} from "./ProductsView.utils";

// Imports: internal libs and types
import { ALL_PRODUCTS_QUERYResult, Category } from "@/sanity.types";

// Imports: external libraries
import { useState } from "react";
import { ProductGrid } from "@hgcle/ui-library";

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

  const filteredProducts = filterProducts(products, selectedCategories);
  const structuredProducts = restructureProducts(filteredProducts);

  return (
    <>
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        handleCheckboxChange={(event) =>
          handleCheckboxChange(event, setSelectedCategories)
        }
      />
      <ProductGrid products={structuredProducts} />
    </>
  );
};

export default ProductsView;
