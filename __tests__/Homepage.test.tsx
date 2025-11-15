import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Import mocks first
jest.mock("@/sanity/lib/live", () => ({
  sanityFetch: jest.fn(async () => []),
}));
jest.mock("@/sanity/lib/products/getAllProducts", () => ({
  getAllProducts: jest.fn(async () => []),
}));
jest.mock("@/sanity/lib/products/getAllCategories", () => ({
  getAllCategories: jest.fn(async () => []),
}));

import Home from "@/src/app/(store)/page";

describe("<Home />", () => {
  test("title exists on page", async () => {
    const data = await Home;
    expect(data.title).toBeDefined;
  });

  test("page renders", async () => {
    const component = await Home();
    render(component);
  });
});
