import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({}));
  vi.mock("@/sanity/lib/products/getProductBySlug", () => ({
    getProductBySlug: vi
      .fn()
      .mockResolvedValue({ _id: "mock-id", name: "Mock product" }),
  }));
});

import ProductPage from "./page";

describe("<ProductPage />", () => {
  test("exactly one <h1> exists on page", async () => {
    const params = { slug: "mock-product" };
    const component = await ProductPage({ params });
    render(component);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
