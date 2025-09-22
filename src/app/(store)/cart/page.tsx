"use client";

import { Product } from "@/sanity.types";
import { getProductsArrayById } from "@/sanity/lib/products/getProductsArrayById";
import CartItemCard from "@/src/components/CartItemCard";
import { CartContext } from "@/src/context/CartContextProvider";
import { useContext, useEffect, useState } from "react";
import { Loader } from "react-feather";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // `useEffect` as async functions not supported in Client Components: https://nextjs.org/docs/messages/no-async-client-component
  useEffect(() => {
    (async () => {
      const products = await getProductsArrayById([...cartItems]);
      setSelectedProducts(products);
      setIsLoading(false);
    })();
  }, []);

  // If client is not mounted yet, show loader screen
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul>
        {selectedProducts.map((product: Product) => (
          <CartItemCard key={product._id} product={product} />
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
