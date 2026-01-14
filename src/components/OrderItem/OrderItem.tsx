import styles from "./OrderItem.module.css";

// Imports: internal libs and types
import { formatCurrency } from "../../lib/formatCurrency";
import { urlFor } from "@/sanity/lib/imageUrl";
import { MY_ORDERS_QUERYResult } from "@/sanity.types";

// Imports: external libraries
import Image from "next/image";
import Button from "@hgcle/ui-library/Button";
import Hypertext from "@hgcle/ui-library/Hypertext";

const OrderItem = ({ order }: { order: MY_ORDERS_QUERYResult[0] }) => (
  <article className={styles.OrderItem__card}>
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
    <section className={styles.OrderItem__list}>
      <h3>Item(s) purchased</h3>
      <ul>
        {order.products &&
          order.products.map((product) => (
            <li key={product._id} className={styles.OrderItem__item}>
              {product.imageGallery && (
                <div className={styles.OrderItem__itemImage}>
                  <Image
                    src={`${urlFor(product.imageGallery[0]).url()}`}
                    width={100}
                    height={100}
                    alt=""
                  />
                </div>
              )}
              <div className={styles.OrderItem__itemDescription}>
                <p>
                  {product.archived ? (
                    product.name + ` (archived listing)`
                  ) : (
                    <Hypertext href={`/product/${product.slug?.current}`}>
                      {product.name}
                    </Hypertext>
                  )}
                </p>
                <p>Price {formatCurrency(product.price ?? 0, "eur")}</p>
                <Button href={product.download} variant="primary">
                  Download
                  <span className="visually-hidden"> {product.name}</span>
                </Button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  </article>
);

export default OrderItem;
