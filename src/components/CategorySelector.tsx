import { Category } from "@/sanity.types";
import CategoryFilterTag from "./CategoryFilterTag";
import styles from "./CategorySelector.module.css";

type CategorySelectorProps = {
  categories: Category[];
  selectedCategories: Set<string>;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategorySelector = ({
  categories,
  selectedCategories,
  handleCheckboxChange,
}: CategorySelectorProps) => (
  <fieldset className={styles.Selector_fieldset}>
    <legend className="visually-hidden">
      Choose your categories to filter the displayed listings
    </legend>
    {categories?.map((category) => (
      <CategoryFilterTag
        key={category._id}
        category={category}
        selectedCategories={selectedCategories}
        handleCheckboxChange={handleCheckboxChange}
      />
    ))}
  </fieldset>
);

export default CategorySelector;
