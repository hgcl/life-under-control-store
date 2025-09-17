import { Product } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";

const ProductThumb = ({ product }: { product: Product }) => {
  return (
    // Accessible card: https://inclusive-components.design/cards/#thepseudocontenttrick
    <li className="card">
      {product.image && (
        <div className="img">
          <img src={`${imageUrl(product.image).url()}`} alt="" />
        </div>
      )}
      <div className="text">
        <h2>
          <a href={`/product/${product.slug?.current}`}>{product.name}</a>
        </h2>
        <p>
          {product.description
            ?.map((block) =>
              block._type == "block"
                ? block.children?.map((child) => child.text).join("")
                : ""
            )
            .join(" ")
            .slice(0, 100) || "No description available"}
        </p>
        <small>€ {product.price}</small>
      </div>
    </li>
  );
};

export default ProductThumb;
