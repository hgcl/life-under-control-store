import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "../live"; // for Live Content API

export async function getAllProducts() {
  const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type == "product"] | order(name asc)`
  );
  try {
    // Use sanityFetch to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    // Return list of products or empty array if none are found
    return products.data || [];
  } catch (error) {
    console.error("Error fetching all products", error);
    return [];
  }
}
