import { screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("next/navigation", () => ({
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  }));
});

import SuccessPage from "../src/app/(store)/success/page";
import cartContextRender from "./cartContextRender";

describe("<SuccessPage />", () => {
  let providerProps: {};
  beforeEach(
    () =>
      (providerProps = {
        clearCart: vi.fn(),
      })
  );

  test("<h1> exists on page", () => {
    cartContextRender(<SuccessPage />, { providerProps });
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
