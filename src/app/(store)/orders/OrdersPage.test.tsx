import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@/src/lib/api/sanity", () => ({
    SanityFetch: vi.fn(),
  }));
  vi.mock("@clerk/nextjs/server", () => ({
    auth: vi.fn(() => ({
      userId: "mock-user", // pretends user is logged in
    })),
  }));
  vi.mock("@/src/lib/api/getMyOrders", () => ({
    getMyOrders: vi.fn().mockResolvedValue([]),
  }));
});

import Orders from "./page";

describe("<Orders />", () => {
  test("exactly one <h1> exists on page", async () => {
    const component = await Orders();
    render(component);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
