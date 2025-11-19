import { CartItem } from "@/src/types";

export function getCurrentCart(cartItems: CartItem[]) {
  const currentCart =
    cartItems.length > 0 ? `Cart (${cartItems.length})` : `Cart`;
  return currentCart;
}
