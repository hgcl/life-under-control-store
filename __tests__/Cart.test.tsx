import { screen } from "@testing-library/react";
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
import cartContextRender from "./cartContextRender";

describe("<CartPage />", () => {
  let providerProps: {};
  beforeEach(
    () =>
      (providerProps = {
        cartItems: vi.fn(),
        clearCart: vi.fn(),
      })
  );

  test("<h1> exists on page", async () => {
    cartContextRender(<CartPage />, { providerProps });
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
