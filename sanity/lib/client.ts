import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // Stega: sync Sanity Studio with Vercel https://www.sanity.io/docs/visual-editing/stega
  stega: {
    studioUrl:
      process.env.VERCEL_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/studio`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`,
  },
});
