import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({
    sanityFetch: vi.fn(),
    SanityLive: vi.fn(),
  }));
  vi.mock("@clerk/nextjs", () => ({
    useUser: vi.fn(() => ({
      user: null,
      isSignedIn: false,
    })),
  }));
});

import CartPage from "../src/app/(store)/cart/page";

describe("<CartPage />", () => {
  test("<h1> exists on page", () => {
    render(<CartPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
