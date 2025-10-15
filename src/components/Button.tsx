import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string; // if no `href` specified, the component is a <button>
  type?: "primary" | "secondary" | "ternary";
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({
  href,
  children,
  type = "secondary",
  onClick,
  disabled = false,
  ...props
}: ButtonProps) => {
  if (href)
    return (
      <Link
        href={href}
        className={`${styles.Button} ${type === "primary" ? styles.primary : type === "secondary" ? styles.secondary : styles.ternary}`}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button
      className={`${styles.Button} ${type === "primary" ? styles.primary : type === "secondary" ? styles.secondary : styles.ternary}`}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
