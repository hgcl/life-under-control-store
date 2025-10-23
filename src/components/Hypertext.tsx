import Link from "next/link";
import styles from "./Hypertext.module.css";

type HypertextProps = {
  href: string;
  children: React.ReactNode;
};

const Hypertext = ({ href, children, ...props }: HypertextProps) => (
  <Link href={href} className={styles.Hypertext} {...props}>
    {children}
  </Link>
);

export default Hypertext;
