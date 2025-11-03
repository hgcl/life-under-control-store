import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";
import styles from "./ProductGrid.module.css";
import { ProductCard } from "@hgcl/ui-library";
import { urlFor } from "@/sanity/lib/imageUrl";

const ProductGrid = ({ products }: { products: ALL_PRODUCTS_QUERYResult }) => {
  const activeProducts = products?.filter((product) => !product.archived);

  return (
    <ul className={styles.Grid}>
      {/* First image in gallery only */}
      {activeProducts.slice(0, 1).map(
        (product) =>
          product.imageGallery &&
          product.name &&
          product.description &&
          product.price && (
            <ProductCard
              key={product._id}
              image={urlFor(product.imageGallery[0]).url()}
              name={product.name}
              url={`/product/${product.slug?.current}`}
              description={
                product.description
                  .map((block) =>
                    block._type == "block"
                      ? block.children?.map((child) => child.text).join("")
                      : ""
                  )
                  .join(" ")
                  .slice(0, 100) || "No description available"
              }
              price={product.price}
              imagePriority="high"
              imageBlur={product.imageGallery[0].asset?.metadata?.lqip}
            />
          )
      )}
      {/* From 2nd to last image in gallery */}
      {activeProducts.slice(1).map(
        (product) =>
          product.imageGallery &&
          product.name &&
          product.description &&
          product.price && (
            <ProductCard
              key={product._id}
              image={urlFor(product.imageGallery[0]).url()}
              name={product.name}
              url={`/product/${product.slug?.current}`}
              description={
                product.description
                  .map((block) =>
                    block._type == "block"
                      ? block.children?.map((child) => child.text).join("")
                      : ""
                  )
                  .join(" ")
                  .slice(0, 100) || "No description available"
              }
              price={product.price}
              imagePriority="low"
              imageBlur={product.imageGallery[0].asset?.metadata?.lqip}
            />
          )
      )}
    </ul>
  );
};

export default ProductGrid;
