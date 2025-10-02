import styles from "./Banner.module.css";

type BannerProps = {
  message: string;
  disabled?: boolean;
};

const Banner = ({ message, disabled = false }: BannerProps) => {
  if (disabled) {
    return;
  }

  return <section className={styles.wrapper}>{message}</section>;
};

export default Banner;
