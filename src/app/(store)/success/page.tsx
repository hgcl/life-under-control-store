"use client";

import { CartContext } from "@/src/context/CartContextProvider";
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
      <button>View order details</button>
      <button>Continue shopping</button>
    </div>
  );
};

export default SuccessPage;
