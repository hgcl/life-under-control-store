import { Category } from "@/sanity.types";
import CategoryFilterTag from "./CategoryFilterTag";

type CategorySelectorProps = {
  categories: Category[];
  selectedCategories: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategorySelector = ({
  categories,
  selectedCategories,
  onChange,
}: CategorySelectorProps) => {
  return (
    <fieldset>
      <legend>Choose your interests</legend>
      {categories?.map((category) => (
        <CategoryFilterTag
          key={category._id}
          category={category}
          selectedCategories={selectedCategories}
          onChange={onChange}
        />
      ))}
    </fieldset>
  );
};

export default CategorySelector;
