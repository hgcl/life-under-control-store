"use client";

import { useContext, useState } from "react";
import createCheckoutSession, {
  Metadata,
} from "@/src/actions/createCheckoutSession";
import { SignInButton, useUser } from "@clerk/nextjs";
import Button from "./Button";
import CartList from "./CartList";
import { CartContext } from "../context/CartContextProvider";
import styles from "./CartOverview.module.css";

const CartOverview = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  // Clerk authentification
  const { isSignedIn, user } = useUser();

  // Calculate total price based on cart items
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  // Checkout process activated on click
  const handleCheckout = async () => {
    if (!isSignedIn) return;
    setIsLoading(true);

    try {
      const metadata: Metadata = {
        // User data on Clerk: https://clerk.com/docs/references/javascript/user
        orderNumber: crypto.randomUUID(),
        customerName: user?.fullName ?? "Unknown",
        customerEmail: user?.emailAddresses[0].emailAddress ?? "Unknown",
        clerkUserId: user?.id,
      };

      const checkoutUrl = await createCheckoutSession(cartItems, metadata);

      // Redirects to checkout session
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error("Error handling checkout", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {
        // 1. Empty cart
        cartItems.length <= 0 ? (
          <section className={styles.CartEmpty}>
            <p>Your cart is empty.</p>
            <Button href="/" type="primary">
              Start browsing
            </Button>
          </section>
        ) : (
          // 2. Full cart
          <div className={styles.CartOverview}>
            <CartList cartItems={cartItems} />
            <section className={styles.CartOverview_summary}>
              <h2>Order summary</h2>
              <p>{cartItems.length} item(s)</p>
              <p className={styles.CartOverview_totalPrice}>
                <span>Total</span>
                <span>€ {totalPrice.toFixed(2)}</span>
              </p>
              {
                // 1. Full cart and signed in
                isSignedIn ? (
                  <Button
                    onClick={handleCheckout}
                    disabled={isLoading}
                    type="primary"
                  >
                    {isLoading ? "Processing..." : "Proceed to checkout"}
                  </Button>
                ) : (
                  // 2 Full cart and signed out
                  <SignInButton>
                    <Button type="primary">Sign in to check out</Button>
                  </SignInButton>
                )
              }
              <Button onClick={() => clearCart()}>Clear cart</Button>
            </section>
          </div>
        )
      }
    </>
  );
};

export default CartOverview;
