// File named route.ts, as it is a route handler: Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.
// NextJS docs: https://nextjs.org/docs/app/api-reference/file-conventions/route

import { backendClient } from "@/sanity/lib/backendClient";
import { Metadata } from "@/src/lib/createCheckoutSession";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import stripe from "@/src/lib/stripe";
import Stripe from "stripe";

// Setting up Stripe webhooks
// docs: https://docs.stripe.com/webhooks/quickstart
export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const stripeSignature = headersList.get("stripe-signature");

  console.log(">>>>>>>>>>>>>> WEBHOOK HIT <<<<<<<<<<<<<<");

  // Verify the source of a webhook request to prevent bad actors from acting like Stripe
  if (!stripeSignature) {
    return NextResponse.json(
      { error: "No signature from Stripe" },
      { status: 400 }
    );
  }

  // Verify that we have a webhook secret saved
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.log("Stripe webhook secret is not set");
    return NextResponse.json(
      { error: "Stripe webhook secret is not set" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    // Verify the request: use the Stripe library to verify that the request came from Stripe
    event = stripe.webhooks.constructEvent(
      body,
      stripeSignature,
      webhookSecret
    );
  } catch (error) {
    console.error("Stripe webhook secret is not set", error);
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${error}` },
      { status: 400 }
    );
  }

  // Handle the event
  // Stripe types of events: https://docs.stripe.com/api/events/types#api-section-event_types
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("Checkout session >>>", session);

    try {
      const order = await createOrderInSanity(session);
      console.log("Order created in Sanity:", order);
    } catch (error) {
      console.error("Error creating order in Sanity:", error);
      return NextResponse.json(
        { error: "Error creating order" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}

const createOrderInSanity = async (session: Stripe.Checkout.Session) => {
  const { id, customer, metadata, amount_total, currency, payment_intent } =
    session;

  const { orderNumber, customerName, customerEmail, clerkUserId } =
    metadata as Metadata;

  // We need to expand the product array to get the metadata (see createCheckoutSession.ts)
  // TODO: review this session + add clarifying comments
  // Stackoverflow: https://stackoverflow.com/questions/71352151/how-to-access-items-metadata-in-stripe-checkout-session
  // Stripe docs: https://docs.stripe.com/api/checkout/sessions/line_items
  const lineItemsWithProduct = await stripe.checkout.sessions.listLineItems(
    id,
    { expand: ["data.price.product"] }
  );

  const sanityProducts = lineItemsWithProduct.data.map((item) => ({
    _key: crypto.randomUUID(),
    _type: "reference",
    _ref: (item.price?.product as Stripe.Product)?.metadata?.id,
  }));

  // Create an order on Sanity
  // Check Sanity `orderType.ts` to generate correct order structure
  const order = await backendClient.create({
    _type: "order",
    orderNumber: orderNumber,
    stripeCheckoutSessionId: id,
    stripePaymentIntentId: payment_intent,
    customerName: customerName,
    stripeCustomerId: customer,
    clerkUserId: clerkUserId,
    customerEmail: customerEmail,
    currency: currency,
    products: sanityProducts,
    totalPrice: amount_total ? amount_total / 100 : 0,
    status: "paid",
    orderDate: new Date().toISOString(),
  });

  console.log("Order created in Sanity >>>", order);
  return order;
};
