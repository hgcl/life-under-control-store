"use client";

import { CartContext } from "@/src/context/CartContextProvider";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import styles from "./page.module.css";
import Button from "@/src/components/Button";
import Hypertext from "@/src/components/Hypertext";

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
    <section className={styles.Success}>
      <h2>Thank you for your order!</h2>
      <div className={styles.Success_content}>
        <p>
          You will find download links for all purchased items directly in your{" "}
          <Hypertext href="/orders">Orders</Hypertext> section.
        </p>
        <p>
          Order number:{" "}
          <span className={styles.Success_code}>{orderNumber}</span>
        </p>
      </div>
      <div className={styles.Success_buttons}>
        <Button href="/orders" type="primary">
          View order details
        </Button>
        <Button href="/">Continue shopping</Button>
      </div>
    </section>
  );
  section;
};

export default SuccessPage;
