import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { formatCurrency } from "../lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const OrderItem = ({ order }: { order: MY_ORDERS_QUERYResult[0] }) => (
  <article>
    <h2>Order number {order.orderNumber}</h2>
    <p>
      Order date{" "}
      {order.orderDate ? new Date(order.orderDate).toLocaleDateString() : "N/A"}
    </p>
    <p>Total amount {formatCurrency(order.totalPrice ?? 0, order.currency)}</p>
    <p>Status {order.status}</p>
    <section className="order-items">
      <h3>Order items</h3>
      <ul>
        {order.products &&
          order.products.map((product) => (
            <li key={product._id}>
              {product.image && (
                <div className="img">
                  <Image src={`${imageUrl(product.image).url()}`} alt="" />
                </div>
              )}
              <p>
                <Link href={`/product/${product.slug?.current}`}>
                  {product.name}
                </Link>{" "}
                {formatCurrency(product.price ?? 0, "eur")}
              </p>
            </li>
          ))}
      </ul>
    </section>
  </article>
);

export default OrderItem;
