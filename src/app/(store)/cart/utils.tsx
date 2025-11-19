import createCheckoutSession, {
  Metadata,
} from "@/src/actions/createCheckoutSession";

/**
 * Calculate total price based on cart items
 */

import { CartItem } from "@/src/types";
import { Dispatch, SetStateAction } from "react";

export function calculateTotalPrice(cartItems: CartItem[]) {
  return cartItems.reduce((acc, curr) => acc + curr.price, 0);
}

/**
 * Checkout process activated on click
 */

export async function handleCheckout({
  isSignedIn,
  setIsLoading,
  user,
  cartItems,
}: {
  isSignedIn: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  user: any;
  cartItems: CartItem[];
}) {
  if (!isSignedIn) {
    console.error(">>> Not signed in");
    return;
  }
  setIsLoading(true);

  try {
    // User data on Clerk: https://clerk.com/docs/references/javascript/user
    const metadata: Metadata = {
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
}
