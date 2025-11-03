import { Category } from "@/sanity.types";
import { FilterTag } from "@hgcl/ui-library";
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
