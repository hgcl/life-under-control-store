"use client";

import { CartContext } from "../../context/CartContextProvider";
import { isProductInCart } from "./UpdateCartButton.utils";

// Imports: internal libs and types
import { CartItem } from "../../types";

// Imports: external libraries
import { useContext, useState } from "react";
import Button from "@hgcle/ui-library/Button";

const UpdateCartButton = ({
  cartItem,
  variant = "secondary",
}: {
  cartItem: CartItem;
  variant?: "primary" | "secondary" | "ternary";
}) => {
  const {
    cartItems: localStorageItems,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const init = isProductInCart({ localStorageItems, cartItem });

  const [isActive, setIsActive] = useState(init);

  function toggle() {
    setIsActive((current) => !current);
    if (isActive) {
      removeFromCart(cartItem);
    } else {
      addToCart(cartItem);
    }
  }

  return (
    <Button
      aria-pressed={isActive ? "true" : "false"}
      onClick={toggle}
      variant={variant}
    >
      {isActive ? "Remove from cart" : "+ Add to cart"}
    </Button>
  );
};

export default UpdateCartButton;
