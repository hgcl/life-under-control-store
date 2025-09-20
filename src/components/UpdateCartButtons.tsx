"use client";

import { CartContext } from "../context/CartContextProvider";
import { useContext } from "react";

const UpdateCartButtons = ({ productId }: { productId: string }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <button onClick={() => addToCart(productId)}>Add to cart</button>
      <button onClick={() => removeFromCart(productId)}>
        Remove from cart
      </button>
    </>
  );
};

export default UpdateCartButtons;
