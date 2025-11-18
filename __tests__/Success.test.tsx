import { screen, render } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/navigation", () => ({
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  }));
});

import SuccessPage from "../src/app/(store)/success/page";

describe("<SuccessPage />", () => {
  test("<h1> exists on page", () => {
    render(<SuccessPage />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
