import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/sanity/lib/live", () => ({
    sanityFetch: vi.fn(),
    SanityLive: vi.fn(),
  }));
  vi.mock("@clerk/nextjs/server", () => ({
    auth: vi.fn(() => ({
      userId: "mock-user", // pretends user is logged in
      sessionId: "mock-session",
    })),
    currentUser: vi.fn(),
    clerkClient: {
      users: {
        getUser: vi.fn(),
      },
    },
  }));
  vi.mock("next/navigation", () => ({
    redirect: vi.fn(),
  }));
});

import Orders from "../src/app/(store)/orders/page";

describe("<Orders />", () => {
  test("<h1> exists on page", async () => {
    const component = await Orders();
    render(component);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
