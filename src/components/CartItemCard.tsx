import UpdateCartButtons from "./UpdateCartButtons";
import { CartItem } from "../types";

// TODO: Ȧlign on `ProductThumb` component
const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => (
  <li className="card">
    <div className="img">
      <img src={cartItem.image} alt="" />
    </div>
    <div className="text">
      <h3>
        <a href="">{cartItem.name}</a>
      </h3>
      <p>€ {cartItem.price.toFixed(2)}</p>
    </div>
    {/* TODO: hide item when removed from cart */}
    <UpdateCartButtons cartItem={cartItem} />
  </li>
);

export default CartItemCard;
