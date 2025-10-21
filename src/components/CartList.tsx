import CartItem from "./CartItem";
import { CartItem as CartItemType } from "../types";
import styles from "./CartList.module.css";

const CartList = ({ cartItems }: { cartItems: CartItemType[] }) => (
  <ul className={styles.CartList}>
    {cartItems.map((cartItem: CartItemType) => (
      <CartItem key={cartItem._id} cartItem={cartItem} />
    ))}
  </ul>
);

export default CartList;
