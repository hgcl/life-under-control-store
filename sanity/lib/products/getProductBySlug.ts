import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "../live"; // for Live Content API

export async function getProductBySlug(slug: string) {
  const PRODUCT_BY_ID_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
  );
  try {
    // Use sanityFetch to send the query
    const products = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: { slug },
    });

    // Return the product data or null if not found
    return products.data || [];
  } catch (error) {
    console.error("Error fetching product by ID", error);
    return [];
  }
}
