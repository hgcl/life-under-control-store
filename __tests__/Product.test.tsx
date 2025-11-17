import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({
    sanityFetch: vi.fn(),
    SanityLive: vi.fn(),
  }));
  vi.mock("@/sanity/lib/products/getProductBySlug", () => ({
    getProductBySlug: vi
      .fn()
      .mockResolvedValue({ _id: "mock-id", name: "Mock product" }),
  }));
});

import ProductPage from "../src/app/(store)/product/[slug]/page";

describe("<ProductPage />", () => {
  test("<h1> exists on page", async () => {
    const params = { slug: "mock-product" };
    const component = await ProductPage({ params });
    render(component);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
