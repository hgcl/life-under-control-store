import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test, vi } from "vitest";

beforeAll(() => {
  vi.mock("@clerk/nextjs", () => ({
    useUser: vi.fn(() => ({
      user: "mock-user",
    })),
    ClerkLoaded: vi.fn(({ children }) => <>{children}</>),
    SignInButton: vi.fn(({ children }) => <>{children}</>),
    UserButton: vi.fn(({ children, ...props }) => (
      <div {...props}>
        <button aria-label="Open user menu">{children}</button>
      </div>
    )),
  }));
});

import Header from "./Header";

describe("<Header />", () => {
  test("navigate to homepage", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /life under control/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("navigate to cart", () => {
    render(<Header />);
    const cartLink = screen.getByRole("link", { name: /cart/i });
    expect(cartLink).toHaveAttribute("href", "/cart");
  });

  test("navigate to orders (when logged in)", () => {
    render(<Header />);
    const ordersLink = screen.getByRole("link", { name: /orders/i });
    expect(ordersLink).toHaveAttribute("href", "/orders");
  });

  test("user menu is visible (when logged in)", () => {
    render(<Header />);
    expect(screen.getByLabelText("Open user menu")).toBeInTheDocument();
  });
});
