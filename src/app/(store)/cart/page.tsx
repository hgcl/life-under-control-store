"use client";

import CartItemCard from "@/src/components/CartItemCard";
import { CartContext } from "@/src/context/CartContextProvider";
import { CartItem } from "@/src/types";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total price based on cart items
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <ul>
        {cartItems.map((cartItem: CartItem) => (
          <CartItemCard key={cartItem._id} cartItem={cartItem} />
        ))}
      </ul>
      <div>
        <h2>Order summary</h2>
        <p>
          Item(s) total <span>€ {totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </>
  );
};

export default Cart;
