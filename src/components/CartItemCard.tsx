import UpdateCartButton from "./UpdateCartButton";
import { CartItem } from "../types";
import Image from "next/image";
import Link from "next/link";

// TODO: Ȧlign on `ProductThumb` component
const CartItemCard = ({ cartItem }: { cartItem: CartItem }) => (
  <li className="card">
    <div className="img">
      <Image src={cartItem.image} alt="" width={400} height={300} />
    </div>
    <div className="text">
      <h3>
        <Link href={`/product/${cartItem.slug}`}>{cartItem.name}</Link>
      </h3>
      <p>€ {cartItem.price.toFixed(2)}</p>
    </div>
    {/* TODO: hide item when removed from cart */}
    <UpdateCartButton cartItem={cartItem} />
  </li>
);

export default CartItemCard;
