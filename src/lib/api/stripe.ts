import Stripe from "stripe";

// TODO!: Use an API route to avoid environment variable being leaked on the client side
// https://medium.com/@gragson.john/stripe-checkout-and-webhook-in-a-next-js-15-2025-925d7529855e#2eb6
// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not found");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-08-27.basil",
});

export default stripe;
