import { Category, Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView = ({ products, categories }: ProductsViewProps) => {
  return (
    <div>
      {/* TODO: <CategorySelector categories={categories} /> */}
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsView;
