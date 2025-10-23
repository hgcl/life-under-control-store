import { Grid } from "react-feather";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Products",
  type: "document",
  icon: Grid,
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "imageGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image", options: { metadata: ["lqip"] } }],
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "archived",
      title: "Archived product?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: "name",
      image: "imageGallery.0.asset",
      price: "price",
      archived: "archived",
    },
    prepare(select) {
      return {
        title: `${select.archived ? `(ARCHIVED)` : ""} ${select.name}`,
        subtitle: `${select.price} €`,
        media: select.image,
      };
    },
  },
});
