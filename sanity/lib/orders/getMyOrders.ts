import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "../live"; // for Live Content API

export async function getMyOrders(userId: string) {
  if (!userId) {
    throw new Error("Clerk user ID is required");
  }

  const MY_ORDERS_QUERY = defineQuery(
    `*[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {..., products[]->}`
  );

  try {
    // Use sanityFetch to send the query
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });

    // Return list of orders or empty array if none are found
    return orders.data || [];
  } catch (error) {
    console.error("Error fetching orders", error);
    return [];
  }
}
