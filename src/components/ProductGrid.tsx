import { Product } from "@/sanity.types";
import ProductThumb from "./ProductThumb";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }: { products: Product[] }) => {
  const activeProducts = products?.filter((product) => !product.archived);
  return (
    <ul className={styles.Grid}>
      {/* First image in gallery only */}
      {activeProducts.slice(0, 1).map((product) => (
        <ProductThumb key={product._id} product={product} isPreloaded />
      ))}
      {/* From second to last image in gallery */}
      {activeProducts.slice(1).map((product) => (
        <ProductThumb key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default ProductGrid;
