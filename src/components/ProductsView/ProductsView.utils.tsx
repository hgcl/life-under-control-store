import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/imageUrl";
import { Dispatch, SetStateAction } from "react";

/**
 * Update set of selected categories based on if categories pills are checked or not
 */

export function handleCheckboxChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedCategories: Dispatch<SetStateAction<Set<string>>>,
) {
  const checkboxId = event.target.id;
  const isChecked = event.target.checked;

  if (isChecked) {
    // If checkbox is checked, add category to `selectedCategories` Set — we don't need to care about duplicates with a Set object
    setSelectedCategories((prevSet) => {
      // We need to create a new Set, as React may not detect the change because the reference to`selectedCategories` remains the same
      const newSet = new Set(prevSet);
      newSet.add(checkboxId);
      return newSet;
    });
  } else {
    // If checkbox is not checked, remove category from `selectedCategories` Set
    setSelectedCategories((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.delete(checkboxId);
      return newSet;
    });
  }
}

/**
 * Return filtered products based on selected categories
 */

export function filterProducts(
  products: ALL_PRODUCTS_QUERYResult,
  selectedCategories: Set<string>,
): // eslint-disable-next-line  @typescript-eslint/no-explicit-any
any[] {
  // Filter `products` shown based on `selectedCategories` — we need an unknown[] type to adapt to the component
  const filteredProducts = products.filter((product) => {
    if (!product.categories) {
      return false;
    }
    for (const category of product.categories) {
      if (selectedCategories.has(category._ref)) {
        return true;
      }
    }
  });
  return filteredProducts;
}

/**
 * Restructure filteredProducts data to work with `<ProductGrid>` component
 */

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function restructureProducts(filteredProducts: any[]) {
  return filteredProducts.map((item) => ({
    ...item,
    id: item._id,
    url: `/product/${item.slug.current}`,
    description: item.description[0].children[0]?.text.slice(0, 100),
    image: item.imageGallery ? urlFor(item.imageGallery[0]).url() : undefined,
    imageBlur: item.imageGallery?.[0].asset.metadata.lqip,
  }));
}
