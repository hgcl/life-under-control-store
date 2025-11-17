import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/products/getAllProducts", () => ({
    getAllProducts: vi.fn().mockResolvedValue([]),
  }));
  vi.mock("@/sanity/lib/products/getAllCategories", () => ({
    getAllCategories: vi.fn().mockResolvedValue([]),
  }));
});

import Home from "../src/app/(store)/page";

describe("<Home />", () => {
  test("<h1> exists on page", async () => {
    const component = await Home();
    render(component);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
