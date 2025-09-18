import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { Product } from "@/sanity.types";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product: Product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <h1>{product.name}</h1>
      <p>€ {product.price?.toFixed(2)}</p>
      <button>Add to cart</button>
      {Array.isArray(product.description) && (
        <PortableText value={product.description} />
      )}
      {/* TODO: make image carrousel */}
      {product.image && (
        <div>
          <img src={`${imageUrl(product.image).url()}`} alt="" />
        </div>
      )}
    </>
  );
};

export default ProductPage;
