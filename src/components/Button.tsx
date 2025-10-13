import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // if no `href` specified, the component is a <button>
  type?: "primary" | "secondary";
};

const Button = ({
  href,
  children,
  type = "primary",
  ...props
}: ButtonProps) => {
  if (href)
    return (
      <Link
        href={href}
        className={`${styles.Button} ${type === "primary" ? styles.primary : styles.secondary}`}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button
      className={`${styles.Button} ${type === "primary" ? styles.primary : styles.secondary}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
