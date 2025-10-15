import UpdateCartButton from "@/src/components/UpdateCartButton";
import Carrousel from "@/src/components/Carrousel";
import { CartItem } from "@/src/types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import styles from "./ProductCard.module.css";
import { Product } from "@/sanity.types";

const ProductCard = ({ product }: { product: Product }) => {
  // Save cartItem data
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
    slug: product.slug?.current ? product.slug.current : "",
    image: product.image ? imageUrl(product.image).url() : "",
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
    <section id={styles.ProductCard}>
      {product.imageGallery && <Carrousel imageArray={product.imageGallery} />}
      <div>
        <h1>{product.name}</h1>
        <p>€ {product.price?.toFixed(2)}</p>
        <UpdateCartButton cartItem={cartItem} type="primary" />
      </div>
    </section>
  );
};

export default ProductCard;
