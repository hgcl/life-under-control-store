import { describe, assert, test } from "vitest";

import { structureCartItem } from "./ProductDetails.utils";
import { productWithoutId } from "@/src/lib/test-fixtures";
import { CartItem } from "@/src/types";
import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";

describe("<ProductDetails /> -- utils", () => {
  test("product is correctly structured to be added to cart", () => {
    // Initialize mock
    const product = {
      _id: "1",
      ...productWithoutId,
    } as ALL_PRODUCTS_QUERYResult[0]; // Force type, as it is difficult to create mocks that are completely compatible with Sanity custom types

    const restructuredItem = structureCartItem(product);

    // Confirm that `restructuredItem` is ready to be added to cart (correct data structure)
    const correctCartItem: CartItem = {
      _id: "1",
      name: "Movie Journal",
      price: 6,
      slug: "movie-journal",
      image:
        "https://cdn.sanity.io/images/7fmniv4c/production/xxx-1125x1500.webp",
      description:
        "Movies & TV Shows Tracker | Ultimate Bundle for A4, A5, Letter | Binder Printables, To Watch, Favori",
    };
    assert.deepEqual(restructuredItem, correctCartItem);
  });
});
