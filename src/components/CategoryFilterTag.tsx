import { Category } from "@/sanity.types";
import styles from "./CategoryFilterTag.module.css";
import { Check } from "react-feather";

type CategoryFilterTagProps = {
  category: Category;
  selectedCategories: Set<string>;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategoryFilterTag = ({
  category,
  selectedCategories,
  handleCheckboxChange,
}: CategoryFilterTagProps) => {
  const isChecked = selectedCategories.has(category._id); // boolean

  return (
    <div className={`${styles.Pill} ${isChecked ? styles.checked : ""}`}>
      <input
        className={styles.Pill_input}
        type="checkbox"
        id={category._id}
        name="category"
        value={category.slug?.current}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={category.slug?.current}>{category.title}</label>
      <span className={styles.Pill_iconWrapper} hidden>
        <Check
          className={styles.Pill_icon}
          aria-hidden="true"
          focusable="false"
          stroke="currentcolor"
        />
      </span>
    </div>
  );
};

export default CategoryFilterTag;
