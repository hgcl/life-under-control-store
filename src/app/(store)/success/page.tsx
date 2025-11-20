"use client";

import styles from "./page.module.css";
import { CartContext } from "@/src/context/CartContextProvider";

// Imports: external libraries
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { Button, Hypertext, Page } from "@hgcle/ui-library";

const SuccessPage = () => {
  // In `createCheckoutSession.ts`, the order number was saved as a URL param on success
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    if (orderNumber) {
      clearCart();
      console.log(">>> Cart emptied");
    }
  }, []);

  return (
    <Page title="Successful order" hideTitle>
      <section className={styles.Success}>
        <h2>Thank you for your order!</h2>
        <div className={styles.Success__content}>
          <p>
            You will find download links for all purchased items directly in
            your <Hypertext href="/orders">Orders</Hypertext> section.
          </p>
          <p>
            Order number:{" "}
            <span className={styles.Success__code}>{orderNumber}</span>
          </p>
        </div>
        <div className={styles.Success__buttons}>
          <Button href="/orders" variant="primary">
            View order details
          </Button>
          <Button href="/">Continue shopping</Button>
        </div>
      </section>
    </Page>
  );
};

export default SuccessPage;
