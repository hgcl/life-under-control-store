import { Product } from "@/sanity.types";
// import { imageUrl } from "@/sanity/lib/imageUrl";
import { imageUrl } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductThumb.module.css";

const ProductThumb = ({ product }: { product: Product }) => (
  // Accessible card: https://inclusive-components.design/cards/#thepseudocontenttrick
  <li className={styles.Card}>
    {product.image && (
      <div className={styles.Card_image}>
        <Image
          src={`${imageUrl(product.image).url()}`}
          alt=""
          fill
          sizes="400px" // aligned on .Card max-width
        />
      </div>
    )}
    <div className={styles.Card_textWrapper}>
      <div>
        <h2>
          <Link
            className={styles.Card_link}
            href={`/product/${product.slug?.current}`}
          >
            {product.name}
          </Link>
        </h2>
        <p className={styles.Card_description}>
          {product.description
            ?.map((block) =>
              block._type == "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ")
            .slice(0, 100) || "No description available"}
        </p>
      </div>
      <p className={styles.Card_price}>€ {product.price?.toFixed(2)}</p>
    </div>
  </li>
);

export default ProductThumb;
