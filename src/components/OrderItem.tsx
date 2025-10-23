import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import { formatCurrency } from "../lib/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import styles from "./OrderItem.module.css";

const OrderItem = ({ order }: { order: MY_ORDERS_QUERYResult[0] }) => (
  <article className={styles.Order_card}>
    <section>
      <h2>Order {order.orderNumber}</h2>
      <p>
        Date:{" "}
        {order.orderDate
          ? new Date(order.orderDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p>
        Total amount: {formatCurrency(order.totalPrice ?? 0, order.currency)}
      </p>
      <p>Status: {order.status}</p>
    </section>
    <section className={styles.Order_list}>
      <h3>Item(s) purchased</h3>
      <ul>
        {order.products &&
          order.products.map((product) => (
            <li key={product._id} className={styles.Order_item}>
              {product.image && (
                <div className={styles.Order_itemImage}>
                  <Image
                    src={`${imageUrl(product.image).url()}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              )}
              <div className={styles.Order_itemDescription}>
                <p>
                  {product.archived ? (
                    product.name + ` (archived listing)`
                  ) : (
                    <Link
                      className={styles.Order_itemLink}
                      href={`/product/${product.slug?.current}`}
                    >
                      {product.name}
                    </Link>
                  )}
                </p>
                <p>Price {formatCurrency(product.price ?? 0, "eur")}</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  </article>
);

export default OrderItem;
