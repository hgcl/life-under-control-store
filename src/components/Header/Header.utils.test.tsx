import { describe, expect, test } from "vitest";

import { getCurrentCart } from "./Header.utils";
import { cartItemWithoutId } from "@/src/lib/test-fixtures";
import { CartItem } from "@/src/types";

describe("<Header /> -- utils", () => {
  test("count number of items in cart", () => {
    // Initialize mock cart with 3 items
    const cartItems: CartItem[] = [
      { _id: "1", ...cartItemWithoutId },
      { _id: "2", ...cartItemWithoutId },
      { _id: "3", ...cartItemWithoutId },
    ];
    const itemsCountString: string = getCurrentCart(cartItems);

    // Confirm that 3 items are displayed
    expect(itemsCountString).toMatch(/cart \(3\)/i);
  });
});
