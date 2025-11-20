import { describe, expect, test, vi } from "vitest";

import { isProductInCart } from "./UpdateCartButton.utils";
import { cartItemWithoutId } from "@/src/lib/test-fixtures";
import { CartItem } from "@/src/types";

describe("<UpdateCartButton /> -- utils", () => {
  // Initialize cart item
  const cartItem: CartItem = { _id: "1", ...cartItemWithoutId };

  test("check if product is already in cart -- true", () => {
    const localStorageItems: CartItem[] = [
      { _id: "2", ...cartItemWithoutId },
      { _id: "1", ...cartItemWithoutId },
    ];
    const productIsInCart = isProductInCart({ localStorageItems, cartItem });
    expect(productIsInCart).toBe(true);
  });

  test("check if product is already in cart -- false", () => {
    const localStorageItems: CartItem[] = [
      { _id: "2", ...cartItemWithoutId },
      { _id: "3", ...cartItemWithoutId },
    ];
    const productIsInCart = isProductInCart({ localStorageItems, cartItem });
    expect(productIsInCart).toBe(false);
  });
});
