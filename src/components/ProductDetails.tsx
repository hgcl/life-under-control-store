import UpdateCartButton from "@/src/components/UpdateCartButton";
import Carrousel from "@/src/components/Carrousel";
import { CartItem } from "@/src/types";
import { urlFor } from "@/sanity/lib/imageUrl";
import styles from "./ProductDetails.module.css";
import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";

const ProductDetails = ({
  product,
}: {
  product: ALL_PRODUCTS_QUERYResult[0];
}) => {
  // Save cartItem data
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
    slug: product.slug?.current ? product.slug.current : "",
    image: product.imageGallery ? urlFor(product.imageGallery[0]).url() : "",
    description:
      product.description
        ?.map((block) =>
          block._type == "block"
            ? block.children?.map((child) => child.text).join("")
            : ""
        )
        .join(" ")
        .slice(0, 100) || "No description available",
  };

  return (
    <section id={styles.ProductDetails}>
      {product.imageGallery && <Carrousel imageArray={product.imageGallery} />}
      <div>
        <h1>{product.name}</h1>
        <p>€ {product.price?.toFixed(2)}</p>
        <UpdateCartButton cartItem={cartItem} variant="primary" />
      </div>
    </section>
  );
};

export default ProductDetails;
