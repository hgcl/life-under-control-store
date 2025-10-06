import { Product } from "@/sanity.types";
import ProductThumb from "./ProductThumb";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }: { products: Product[] }) => (
  <ul className={styles.Grid}>
    {products
      ?.filter((product) => !product.archived)
      .map((product) => (
        <ProductThumb key={product._id} product={product} />
      ))}
  </ul>
);

export default ProductGrid;
