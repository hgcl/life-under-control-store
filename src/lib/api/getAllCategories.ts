import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "@/sanity/lib/live"; // for Live Content API

export async function getAllCategories() {
  const ALL_CATEGORIES_QUERY = defineQuery(
    `*[_type == "category"] | order(name asc)`
  );
  try {
    // Use sanityFetch to send the query
    const categories = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });

    // Return list of categories or empty array if none are found
    return categories.data || [];
  } catch (error) {
    console.error("Error fetching all categories", error);
    return [];
  }
}
