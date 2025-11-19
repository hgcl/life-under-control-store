"use client";

import styles from "./page.module.css";
import { calculateTotalPrice, handleCheckout } from "./utils";
import CartList from "@/src/components/CartList/CartList";
import { CartContext } from "@/src/context/CartContextProvider";

// Imports: external libraries
import { useContext, useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Page, Button } from "@hgcle/ui-library";

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  // Clerk authentification
  const { isSignedIn, user } = useUser();

  return (
    <Page title="Cart" hideTitle>
      {
        // 1. Empty cart
        cartItems.length <= 0 ? (
          <section className={styles.CartEmpty}>
            <p>Your cart is empty.</p>
            <Button href="/" variant="primary">
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
                <span>€ {calculateTotalPrice(cartItems).toFixed(2)}</span>
              </p>
              {
                // 1. Full cart and signed in
                isSignedIn ? (
                  <Button
                    onClick={() =>
                      handleCheckout({
                        isSignedIn,
                        setIsLoading,
                        user,
                        cartItems,
                      })
                    }
                    isDisabled={isLoading}
                    variant="primary"
                    href=""
                  >
                    {isLoading ? "Processing..." : "Proceed to checkout"}
                  </Button>
                ) : (
                  // 2 Full cart and signed out
                  <SignInButton>
                    <Button variant="primary">Sign in to check out</Button>
                  </SignInButton>
                )
              }
              <Button onClick={() => clearCart()}>Clear cart</Button>
            </section>
          </div>
        )
      }
    </Page>
  );
};

export default CartPage;
