import { Category } from "@/sanity.types";
import CategoryFilterTag from "./CategoryFilterTag";

type CategorySelectorProps = {
  categories: Category[];
  selectedCategories: Set<string>;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategorySelector = ({
  categories,
  selectedCategories,
  handleCheckboxChange,
}: CategorySelectorProps) => {
  return (
    <fieldset>
      <legend>Choose your interests</legend>
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
};

export default CategorySelector;
