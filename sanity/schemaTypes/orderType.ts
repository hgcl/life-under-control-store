import { ShoppingBag } from "react-feather";
import { defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: ShoppingBag,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe checkout session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerEmail",
      title: "Customer email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe payment intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }],
    }),
    defineField({
      name: "totalPrice",
      title: "Total price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled " },
          { title: "Refunded", value: "refunded" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderDate",
      title: "Order date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderNumber: "orderNumber",
    },
    prepare(select) {
      const orderSnippet = `${select.orderNumber.slice(0, 5)}...${select.orderNumber.slice(-5)}`;
      return {
        title: `${select.name} (${orderSnippet})`,
        subtitle: `${select.amount} ${select.currency}`,
      };
    },
  },
});
