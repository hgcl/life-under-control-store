import styles from "./CategorySelector.module.css";

// Imports: internal libs and types
import { Category } from "@/sanity.types";

// Imports: external libraries
import FilterTag from "@hgcle/ui-library/FilterTag";

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
  <fieldset className={styles.CategorySelector__fieldset}>
    <legend className="visually-hidden">
      Choose your categories to filter the displayed listings
    </legend>
    {categories?.map(
      (category) =>
        category.title && (
          <FilterTag
            key={category._id}
            label={category.title}
            id={category._id}
            isChecked={selectedCategories.has(category._id)}
            handleFilterChange={handleCheckboxChange}
          />
        )
    )}
  </fieldset>
);

export default CategorySelector;
