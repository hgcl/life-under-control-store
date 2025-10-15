import { CartItem } from "../types";
import CartItemCard from "./CartItemCard";
import styles from "./CartList.module.css";

const CartList = ({ cartItems }: { cartItems: CartItem[] }) => (
  <ul className={styles.CartList}>
    {cartItems.map((cartItem: CartItem) => (
      <CartItemCard key={cartItem._id} cartItem={cartItem} />
    ))}
  </ul>
);

export default CartList;
