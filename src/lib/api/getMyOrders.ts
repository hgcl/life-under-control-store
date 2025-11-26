import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "@/sanity/lib/live"; // for Live Content API

export async function getMyOrders(userId: string) {
  try {
    if (!userId) {
      throw new Error("Clerk user ID is required");
    }

    const MY_ORDERS_QUERY = defineQuery(
      `*[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {..., products[]->}`
    );

    // Use sanityFetch to send the query
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    // Return list of orders, can be an empty array
    return orders.data;
  } catch (error) {
    console.error("Error fetching orders", error);
    return [];
  }
}
