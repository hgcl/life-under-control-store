"use server";

import { defineQuery } from "next-sanity"; // for GROQ query result type generation
import { sanityFetch } from "../live"; // for Live Content API

export async function getProductsArrayById(idArray: string[]) {
  const PRODUCTS_BY_ID_QUERY = defineQuery(
    `*[_type == "product" && _id in $idArray] | order(name asc)`
  );
  try {
    // Use sanityFetch to send the query
    const products = await sanityFetch({
      query: PRODUCTS_BY_ID_QUERY,
      params: { idArray },
    });

    // Return the products data or null if not found
    return products.data || [];
  } catch (error) {
    console.log("Error fetching array of products by ID", error);
    return [];
  }
}
