import { CartItem as CartItemType } from "../../types";
import styles from "./CartList.module.css";
import { CartItem } from "@hgcle/ui-library";
import UpdateCartButton from "../UpdateCartButton/UpdateCartButton";

const CartList = ({ cartItems }: { cartItems: CartItemType[] }) => (
  <ul className={styles.CartList}>
    {cartItems.map((cartItem: CartItemType) => (
      <CartItem
        key={cartItem._id}
        image={cartItem.image}
        name={cartItem.name}
        url={`/product/${cartItem.slug}`}
        description={cartItem.description}
        price={cartItem.price}
      >
        <UpdateCartButton cartItem={cartItem} variant="ternary" />
      </CartItem>
    ))}
  </ul>
);

export default CartList;
