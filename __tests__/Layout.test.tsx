import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({
    sanityFetch: vi.fn(),
    SanityLive: vi.fn(),
  }));
  vi.mock("next/font/local", () => ({
    default: vi.fn(() => ({
      className: "mock-font",
    })),
  }));
  vi.mock("@clerk/nextjs", () => ({
    ClerkProvider: vi.fn(({ children }) => <>{children}</>),
    // In <Header/>
    useUser: vi.fn(() => ({
      user: null,
      isLoaded: true,
      isSignedIn: false,
    })),
    ClerkLoaded: vi.fn(({ children }) => <>{children}</>),
    SignInButton: vi.fn(({ children }) => <>{children}</>),
  }));
});

import RootLayout from "../src/app/(store)/layout";

describe("<RootLayout />", () => {
  test("Skip to content button exists on page", () => {
    render(<RootLayout>Some content</RootLayout>);
    expect(screen.getByRole("link", { name: "Skip to content" })).toBeVisible();
  });
});
