import { Product } from "@/sanity.types";
import { imageUrl } from "@/sanity/lib/imageUrl";
import Image from "next/image";
import Link from "next/link";

const ProductThumb = ({ product }: { product: Product }) => (
  // Accessible card: https://inclusive-components.design/cards/#thepseudocontenttrick
  // TODO!: how to best use Sanity with Next Image?
  <li className="card">
    {product.image && (
      <div className="img">
        <Image
          src={`${imageUrl(product.image).url()}`}
          alt=""
          width={400}
          height={300}
        />
      </div>
    )}
    <div className="text">
      <h2>
        <Link href={`/product/${product.slug?.current}`}>{product.name}</Link>
      </h2>
      <p>
        {product.description
          ?.map((block) =>
            block._type == "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join(" ")
          .slice(0, 100) || "No description available"}
      </p>
      <small>€ {product.price?.toFixed(2)}</small>
    </div>
  </li>
);

export default ProductThumb;
