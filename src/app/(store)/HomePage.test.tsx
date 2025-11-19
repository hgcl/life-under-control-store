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

import Home from "./page";

describe("<Home />", () => {
  test("exactly one <h1> exists on page", async () => {
    const component = await Home();
    render(component);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
