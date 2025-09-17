import { Product } from "@/sanity.types";
import ProductThumb from "./ProductThumb";

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <ul>
      {products?.map((product) => (
        <ProductThumb key={product._id} product={product} />
      ))}
    </ul>
  );
};

export default ProductGrid;
