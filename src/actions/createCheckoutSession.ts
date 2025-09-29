"use server";

import { getProductsArrayById } from "@/sanity/lib/products/getProductsArrayById";
import { CartItem } from "../types";
import stripe from "../lib/stripe";
import { Product } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerUserId: string;
};

const createCheckoutSession = async (
  cartItems: CartItem[],
  metadata: Metadata
) => {
  const cartItemsIds = cartItems.map((item) => item._id);
  const itemsToCheckout: Product[] = await getProductsArrayById(cartItemsIds);
  try {
    // Check that all items in cart have a price
    const itemsWithoutPrice = itemsToCheckout.filter((item) => !item.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error("Some items don't have a price");
    }

    // Search for existing customer by email
    // Stripe docs: https://docs.stripe.com/api/customers/list
    const customers = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: undefined | string;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    const successUrlParam = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/success?session_id={CHEKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHEKOUT_SESSION_ID}&orderNumber=${metadata.orderNumber}`;

    const cancelUrlParam = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/cart`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/cart`;

    // Checkout session
    // Stripe docs: https://docs.stripe.com/api/checkout/sessions
    // Test checkout with dummy credit cards: https://docs.stripe.com/testing?testing-method=card-numbers#visa
    const params = {
      customer: customerId,
      customer_creation: customerId ? undefined : "always",
      // If customer doesn't exist in our Stripe dashboard, get their email from the metadata. Otherwise, Stripe will give us their email by default.
      customer_email: !customerId ? metadata.customerEmail : undefined,
      metadata,
      mode: "payment",
      // If checkout successful: store the `orderNumber` in the url
      success_url: successUrlParam,
      cancel_url: cancelUrlParam,
      // Generate `line_items` following Stripe structure: https://docs.stripe.com/api/prices/create
      line_items: itemsToCheckout.map((item) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name || "Unnamed product",
            description: `Product ID: ${item._id}`,
            metadata: {
              id: item._id,
            },
            images: item.image ? [imageUrl(item.image).url()] : undefined,
          },
          unit_amount: Math.round(item.price! * 100),
        },
        quantity: 1,
      })),
    };

    // Create the Stripe checkout session
    const session = await stripe.checkout.sessions.create(params);

    return session.url;
  } catch (error) {
    console.error("Error creating checkout session", error);
    throw error;
  }
};

export default createCheckoutSession;
