import { CartItem } from "../types";
import CartItemCard from "./CartItemCard";

const CartList = ({ cartItems }: { cartItems: CartItem[] }) => (
  <ul>
    {cartItems.map((cartItem: CartItem) => (
      <CartItemCard key={cartItem._id} cartItem={cartItem} />
    ))}
  </ul>
);

export default CartList;
