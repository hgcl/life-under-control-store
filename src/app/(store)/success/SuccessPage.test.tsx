import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/navigation", () => ({
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  }));
});

import SuccessPage from "./page";

describe("<SuccessPage />", () => {
  test("exactly one <h1> exists on page", () => {
    render(<SuccessPage />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
