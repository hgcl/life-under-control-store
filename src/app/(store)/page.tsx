import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "../../components/ProductsView";

const Home = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <>
      <h1 className="visually-hidden">Homepage</h1>
      <div>
        <ProductsView products={products} categories={categories} />
      </div>
    </>
  );
};

export default Home;
