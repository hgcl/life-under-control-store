import { getProductBySlug } from "@/src/lib/api/getProductBySlug";
import ProductDetails from "@/src/components/ProductDetails/ProductDetails";

// Imports: external libraries
import { notFound } from "next/navigation";

// NextJS caching params (by default, NextJS never caches)
export const dynamic = "force-static";
export const revalidate = 60;

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  console.log(
    crypto.randomUUID().slice(0, 5) +
      `>>> Rerendered the product page cache for ${slug}`,
  );

  if (!product) {
    return notFound();
  }

  return product.name && <ProductDetails product={product} />;
};

export default ProductPage;
