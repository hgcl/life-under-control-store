import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { PRODUCT_BY_SLUG_QUERYResult } from "@/sanity.types";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import UpdateCartButtons from "@/src/components/UpdateCartButtons";
import { CartItem } from "@/src/types";
import Image from "next/image";

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

  // TODO: are these type fixes correct?
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
    slug: product.slug?.current ? product.slug.current : "",
    image: product.image ? imageUrl(product.image).url() : "",
  };

  return (
    <>
      <h1>{product.name}</h1>
      <p>€ {product.price?.toFixed(2)}</p>
      <UpdateCartButtons cartItem={cartItem} />
      {Array.isArray(product.description) && (
        <PortableText value={product.description} />
      )}
      {/* TODO: make image carrousel */}
      {product.image && (
        <div>
          <Image src={`${imageUrl(product.image).url()}`} alt="" />
        </div>
      )}
    </>
  );
};

export default ProductPage;
