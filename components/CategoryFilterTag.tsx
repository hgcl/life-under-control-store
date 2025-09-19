"use client";

import { Category } from "@/sanity.types";

type CategoryFilterTagProps = {
  category: Category;
  selectedCategories: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CategoryFilterTag = ({
  category,
  selectedCategories,
  onChange,
}: CategoryFilterTagProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={category.slug?.current}
        name="category"
        value={category.slug?.current}
        checked={selectedCategories.includes(category.slug?.current)}
        onChange={onChange}
      />
      <label htmlFor={category.slug?.current}>{category.title}</label>
    </div>
  );
};

export default CategoryFilterTag;
