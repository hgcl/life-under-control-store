import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({}));
  vi.mock("@clerk/nextjs", () => ({
    useUser: vi.fn(() => ({})),
  }));
});

import CartPage from "./page";

describe("<CartPage />", () => {
  test("exactly one <h1> exists on page", () => {
    render(<CartPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
