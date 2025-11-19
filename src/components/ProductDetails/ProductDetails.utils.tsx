import { urlFor } from "@/sanity/lib/imageUrl";
import { ALL_PRODUCTS_QUERYResult } from "@/sanity.types";
import { CartItem } from "@/src/types";

export function structureCartItem(product: ALL_PRODUCTS_QUERYResult[0]) {
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name ? product.name : "Unnamed product",
    price: product.price ? product.price : 0,
    slug: product.slug?.current ? product.slug.current : "",
    image: product.imageGallery ? urlFor(product.imageGallery[0]).url() : "",
    description:
      product.description
        ?.map((block) =>
          block._type == "block"
            ? block.children?.map((child) => child.text).join("")
            : ""
        )
        .join(" ")
        .slice(0, 100) || "No description available",
  };
  return cartItem;
}
