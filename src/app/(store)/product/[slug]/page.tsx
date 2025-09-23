import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { Product } from "@/sanity.types";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import UpdateCartButtons from "@/src/components/UpdateCartButtons";
import { CartItem } from "@/src/types";

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

  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
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
          <img src={`${imageUrl(product.image).url()}`} alt="" />
        </div>
      )}
    </>
  );
};

export default ProductPage;
