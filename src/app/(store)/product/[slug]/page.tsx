import "@/src/app/styles/typography.css";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import ProductCard from "@/src/components/ProductCard";

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
      `>>> Rerendered the product page cache for ${slug}`
  );

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductCard product={product} />
      <section className="typography">
        {Array.isArray(product.description) && (
          <PortableText value={product.description} />
        )}
      </section>
    </>
  );
};

export default ProductPage;
