import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductsView from "../../components/ProductsView";
import { Page } from "@hgcl/ui-library";

const Home = async () => {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <Page title="Homepage" hideTitle>
      <ProductsView products={products} categories={categories} />
    </Page>
  );
};

export default Home;
