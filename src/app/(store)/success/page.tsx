"use client";

import { CartContext } from "@/src/context/CartContextProvider";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";

const SuccessPage = () => {
  // In `createCheckoutSession.ts`, the order number was saved as a URL param on success
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    if (orderNumber) {
      clearCart();
    }
  }, [orderNumber, clearCart]);

  return (
    <div>
      <p>Thank you for your order!</p>
      <p>Order number: {orderNumber}</p>
      <p>
        A confirmation email has been sent to your registered email address.
      </p>
      <Link href="/orders">View order details</Link>
      <Link href="/">Continue shopping</Link>
    </div>
  );
};

export default SuccessPage;
