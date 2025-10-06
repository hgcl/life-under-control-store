// Note: So that the skip to content button is correctly displayed, its parent container needs to have the CSS `position: relative`.

import Link from "next/link";
import styles from "./SkipToContent.module.css";

const SkipToContent = () => (
  <Link id={styles.Skip} href="#main">
    Skip to content
  </Link>
);

export default SkipToContent;
