import { describe, test } from "vitest";

import { filterProducts, restructureProducts } from "./ProductsView.utils";
import { products } from "@/src/lib/test-fixtures";
import { correctProductsStructure } from "./ProductsView.fixtures";

describe("<ProductsView /> -- utils", () => {
  test("select category 1, products correctly filtered", () => {
    // Initialize mock categories
    const selectedCategories: Set<string> = new Set();
    const categoryId = "printable-category";
    selectedCategories.add(categoryId); // only the printables category as selected

    const filteredProducts = filterProducts(products, selectedCategories);

    // All filtered products belong to the selected category
    expect(filteredProducts).toHaveLength(2);
    for (const product of filteredProducts) {
      for (const cat of product.categories) {
        expect(cat._ref).toBe(categoryId);
      }
    }
  });

  test("select category 2, products correctly filtered", () => {
    // Initialize mock categories
    const selectedCategories: Set<string> = new Set();
    const categoryId = "spreadsheets-category";
    selectedCategories.add(categoryId); // only the spreadsheets category as selected

    const filteredProducts = filterProducts(products, selectedCategories);

    expect(filteredProducts).toHaveLength(1);
    for (const product of filteredProducts) {
      for (const cat of product.categories) {
        expect(cat._ref).toBe(categoryId);
      }
    }
  });

  test("products have the correct structure to work with `@hgcle/ui-library`", () => {
    const restructuredItems = restructureProducts(products);

    // Confirm that `restructuredItems` has the correct data structure to work with `@hgcle/ui-library`
    assert.deepEqual(restructuredItems, correctProductsStructure);
  });
});
