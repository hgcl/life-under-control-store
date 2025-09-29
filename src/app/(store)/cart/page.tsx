"use client";

import createCheckoutSession, {
  Metadata,
} from "@/src/actions/createCheckoutSession";
import CartList from "@/src/components/CartList";
import { CartContext } from "@/src/context/CartContextProvider";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useContext, useState } from "react";

const CartPage = () => {
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
      {isSignedIn ? (
        <button onClick={handleCheckout} disabled={isLoading}>
          {isLoading ? "Processing..." : "Proceed to checkout"}
        </button>
      ) : (
        <SignInButton>
          <button>Sign in to check out</button>
        </SignInButton>
      )}
      {cartItems.length > 0 ? (
        <>
          <button onClick={() => clearCart()}>Clear cart</button>
          <CartList cartItems={cartItems} />
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      <div>
        <h2>Order summary</h2>
        <p>
          Item(s) total <span>€ {totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </>
  );
};

export default CartPage;
