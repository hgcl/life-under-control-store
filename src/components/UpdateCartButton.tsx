"use client";

import { CartContext } from "../context/CartContextProvider";
import { useContext, useState } from "react";
import { CartItem } from "../types";
import Button from "./Button";

const UpdateCartButton = ({ cartItem }: { cartItem: CartItem }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  // 1. Is this product is in the cart or not? Display the toggle button accordingly.
  // 1.1 Compare `cartItems` (from context) and current `cartItem` arrays
  const isInCart = cartItems.find(
    (storageItem) => storageItem._id === cartItem._id
  );
  // 1.2 Initialize useState value
  let init = false;
  if (isInCart) {
    init = true;
  }
  const [isActive, setIsActive] = useState(init);

  const toggle = () => {
    setIsActive((current) => !current);
    if (isActive) {
      removeFromCart(cartItem);
    } else {
      addToCart(cartItem);
    }
  };

  return (
    <Button aria-pressed={isActive ? "true" : "false"} onClick={toggle}>
      {isActive ? "Remove from cart" : "+ Add to cart"}
    </Button>
  );
};

export default UpdateCartButton;
