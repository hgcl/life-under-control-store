"use client";

import { CartContext } from "../context/CartContextProvider";
import { useContext } from "react";
import { CartItem } from "../types";

const UpdateCartButtons = ({ cartItem }: { cartItem: CartItem }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <button onClick={() => addToCart(cartItem)}>Add to cart</button>
      <button onClick={() => removeFromCart(cartItem)}>Remove from cart</button>
    </>
  );
};

export default UpdateCartButtons;
