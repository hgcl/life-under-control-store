/**
 * Check if the current item is already in the cart
 */

import { CartItem } from "@/src/types";
import { Dispatch, SetStateAction } from "react";

export function isProductInCart({
  localStorageItems,
  cartItem,
}: {
  localStorageItems: CartItem[];
  cartItem: CartItem;
}) {
  // Compare `localStorageItems` (from context) and current `cartItem` arrays
  const isInCart = localStorageItems.find(
    (storageItem) => storageItem._id === cartItem._id
  );

  let isActive = false;
  if (isInCart) {
    isActive = true;
  }

  return isActive;
}
