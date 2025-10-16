import UpdateCartButton from "./UpdateCartButton";
import { CartItem } from "../types";
import Image from "next/image";
import Link from "next/link";
import styles from "./CartItemCard.module.css";

const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => (
  <li className={styles.Card}>
    <div className={styles.Card_textWrapper}>
      <div className={styles.Card_image} aria-hidden="true">
        <Image src={cartItem.image} alt="" width={150} height={150} />
      </div>
      <div>
        <h2>
          <Link className={styles.Card_link} href={`/product/${cartItem.slug}`}>
            {cartItem.name}
          </Link>
        </h2>
        <p className={styles.Card_description}>{cartItem.description}...</p>
        <UpdateCartButton cartItem={cartItem} type="ternary" />
      </div>
      <p className={styles.Card_price}>€ {cartItem.price.toFixed(2)}</p>
    </div>
  </li>
);

export default CartItemCard;
