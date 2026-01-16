import { getAllProducts } from "@/src/lib/api/getAllProducts";
import { getAllCategories } from "@/src/lib/api/getAllCategories";
import ProductsView from "../../components/ProductsView/ProductsView";

// Imports: external libraries
import { Page } from "@hgcle/ui-library";

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
