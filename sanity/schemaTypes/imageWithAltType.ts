import { defineField, defineType } from "sanity";

export const imageWithAltType = defineType({
  name: "imageWithAlt",
  type: "image",
  title: "Image with alt text",
  fields: [
    defineField({
      name: "alt",
      title: "Image alt",
      type: "string",
    }),
  ],
});
