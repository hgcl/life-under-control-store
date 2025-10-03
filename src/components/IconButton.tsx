import Link from "next/link";
import styles from "./IconButton.module.css";

type IconButtonProps = {
  label: string;
  hideLabel?: boolean;
  href?: string; // if no `href` specified, the component is a <button>
  children: React.ReactNode; // children = svg
};

const IconButton = ({
  label,
  hideLabel = false,
  href,
  children,
}: IconButtonProps) => {
  if (href)
    return (
      <Link href={href} className={styles.wrapper}>
        <div className={styles.iconBox} aria-hidden="true">
          {children}
        </div>
        <span
          className={`${styles.label} ${hideLabel ? "visually-hidden" : ""}`}
        >
          {label}
        </span>
      </Link>
    );

  return (
    // Based on previous <Link> example
    <button className={styles.wrapper}>
      <div className={styles.iconBox} aria-hidden="true">
        {children}
      </div>
      <span className={`${styles.label} ${hideLabel ? "visually-hidden" : ""}`}>
        {label}
      </span>
    </button>
  );
};

export default IconButton;
