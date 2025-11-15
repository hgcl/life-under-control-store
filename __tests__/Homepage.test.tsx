import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/products/getAllProducts", () => ({
    getAllProducts: vi.fn(async () => []),
  }));
  vi.mock("@/sanity/lib/products/getAllCategories", () => ({
    getAllCategories: vi.fn(async () => []),
  }));
  vi.mock("@/sanity/lib/imageUrl", () => ({
    urlFor: vi.fn(async () => {}),
  }));
});

import Home from "../src/app/(store)/page";

describe("<Home />", () => {
  test("page renders", async () => {
    const component = await Home();
    render(component);
  });

  test("<h1> exists on page", async () => {
    const component = await Home();
    render(component);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
