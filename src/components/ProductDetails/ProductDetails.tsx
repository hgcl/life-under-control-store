import styles from "./ProductDetails.module.css";
import { structureCartItem } from "./ProductDetails.utils";
import UpdateCartButton from "@/src/components/UpdateCartButton/UpdateCartButton";
import Carousel from "@/src/components/Carousel/Carousel";

// Imports: internal libs and types
import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";

const ProductDetails = ({
  product,
}: {
  product: ALL_PRODUCTS_QUERYResult[0];
}) => {
  const cartItem = structureCartItem(product);

  return (
    <section id={styles.ProductDetails}>
      {product.imageGallery && <Carousel imageArray={product.imageGallery} />}
      <div>
        <h1>{product.name}</h1>
        <p>€ {product.price?.toFixed(2)}</p>
        <UpdateCartButton cartItem={cartItem} variant="primary" />
      </div>
    </section>
  );
};

export default ProductDetails;
