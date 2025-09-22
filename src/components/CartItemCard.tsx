import { Product } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import UpdateCartButtons from "./UpdateCartButtons";

// Ȧlign on `ProductThumb` component
const CartItemCard = ({ product }: { product: Product }) => (
  <li className="card">
    {product.image && (
      <div className="img">
        <img src={`${imageUrl(product.image).url()}`} alt="" />
      </div>
    )}
    <div className="text">
      <h3>
        <a href={`/product/${product.slug?.current}`}>{product.name}</a>
      </h3>
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
      <p>€ {product.price?.toFixed(2)}</p>
    </div>
    {/* TODO: hide item when removed from cart */}
    <UpdateCartButtons productId={product._id} />
  </li>
);

export default CartItemCard;
