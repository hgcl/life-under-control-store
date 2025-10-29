import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductThumb.module.css";

const ProductThumb = ({
  product,
  isPreloaded = false,
  imagePriority = "auto",
}: {
  product: ALL_PRODUCTS_QUERYResult[0];
  isPreloaded?: boolean;
  imagePriority?: "high" | "low" | "auto";
}) => {
  return (
    // Accessible card: https://inclusive-components.design/cards/#thepseudocontenttrick
    <li className={styles.Card}>
      {product.imageGallery && product.imageGallery[0] && (
        <div className={styles.Card_image}>
          <Image
            src={`${urlFor(product.imageGallery[0]).url()}`}
            alt=""
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw"
            // Image loading optimizations
            fetchPriority={imagePriority}
            priority={isPreloaded}
            placeholder="blur"
            blurDataURL={`${product.imageGallery[0].asset?.metadata?.lqip}`}
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
};

export default ProductThumb;
