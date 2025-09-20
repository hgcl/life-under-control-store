import { Category } from "@/sanity.types";

type CategoryFilterTagProps = {
  category: Category;
  selectedCategories: Set<string>;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategoryFilterTag = ({
  category,
  selectedCategories,
  handleCheckboxChange,
}: CategoryFilterTagProps) => (
  <div>
    <input
      type="checkbox"
      id={category._id}
      name="category"
      value={category.slug?.current}
      checked={selectedCategories.has(category._id)}
      onChange={handleCheckboxChange}
    />
    <label htmlFor={category.slug?.current}>{category.title}</label>
  </div>
);

export default CategoryFilterTag;
