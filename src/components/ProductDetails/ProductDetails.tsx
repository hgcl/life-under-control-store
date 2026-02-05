import "@/src/app/styles/typography.css";
import styles from "./ProductDetails.module.css";
import { structureCartItem } from "./ProductDetails.utils";
import UpdateCartButton from "@/src/components/UpdateCartButton/UpdateCartButton";
import Carousel from "@/src/components/Carousel/Carousel";
import FeatherIcon from "@/src/components/FeatherIcon/FeatherIcon";

// Imports: internal libs and types
import { ALL_PRODUCTS_QUERY_RESULT } from "@/sanity.types";
import { PortableText, PortableTextReactComponents } from "next-sanity";

const ProductDetails = ({
  product,
}: {
  product: ALL_PRODUCTS_QUERY_RESULT[0];
}) => {
  const cartItem = structureCartItem(product);

  // Product details
  const components: Partial<PortableTextReactComponents> = {
    block: {
      // Transform <h2> headlines into <h3>
      h2: ({ children }) => <h3>{children}</h3>,
    },
  };

  return (
    <section className={styles.ProductDetails}>
      {product.imageGallery && <Carousel imageArray={product.imageGallery} />}
      <div>
        <div className={styles.ProductDetails__nameAndPrice}>
          <h1>{product.name}</h1>
          <p>€ {product.price?.toFixed(2)}</p>
          <UpdateCartButton cartItem={cartItem} variant="primary" />
        </div>
        {/* Short description */}
        {Array.isArray(product.description) && (
          <div className={styles.ProductDetails__tagline}>
            <PortableText value={product.description[0]} />
          </div>
        )}
        {/* Tag list */}
        <ul className={styles.ProductDetails__tagList}>
          {product.tags
            ? product.tags.map((el, i) => (
                <li key={i}>
                  <span>{el.description}</span>
                  {el.icon ? <FeatherIcon name={el.icon} /> : ""}
                </li>
              ))
            : ""}
        </ul>
        <details className={styles.ProductDetails__details} open>
          <summary>Details</summary>
          <div className={`${styles.ProductDetails__detailsBody} typography`}>
            {Array.isArray(product.description) && (
              <PortableText
                value={product.description.slice(1)}
                components={components}
              />
            )}
          </div>
        </details>
      </div>
    </section>
  );
};

export default ProductDetails;
