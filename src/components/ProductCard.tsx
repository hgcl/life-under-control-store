import UpdateCartButton from "@/src/components/UpdateCartButton";
import Carrousel from "@/src/components/Carrousel";
import { CartItem } from "@/src/types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import styles from "./ProductCard.module.css";
import { Product } from "@/sanity.types";

const ProductCard = ({ product }: { product: Product }) => {
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
    slug: product.slug?.current ? product.slug.current : "",
    image: product.image ? imageUrl(product.image).url() : "",
  };

  return (
    <section id={styles.ProductCard}>
      {product.imageGallery && <Carrousel imageArray={product.imageGallery} />}
      <div>
        <h1>{product.name}</h1>
        <p>€ {product.price?.toFixed(2)}</p>
        <UpdateCartButton cartItem={cartItem} />
      </div>
    </section>
  );
};

export default ProductCard;
