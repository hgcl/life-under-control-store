import { render, screen, within } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

import CartContextProvider, {
  CartContext,
} from "@/src/context/CartContextProvider";
import { cartItemWithoutId } from "@/src/lib/test-fixtures";
import { CartItem } from "@/src/types";
import React, { useContext } from "react";

// Fake context HTML to be able to test context-related functions
const CustomContextTest = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  cartItems?: CartItem[];
}) => {
  // eslint-disable-next-line prefer-const
  let { cartItems, clearCart, addToCart, removeFromCart } =
    useContext(CartContext);

  // If there is an initial mocked cartItems
  if (props.cartItems) {
    cartItems = props.cartItems;
  }

  // TODO: refactor so that these items are not defined in the context, but in the tests
  const itemOne: CartItem = { _id: "4", ...cartItemWithoutId };
  const itemTwo: CartItem = { _id: "5", ...cartItemWithoutId };

  return (
    <div>
      <div data-testid="cart-length">Cart length: {cartItems.length}</div>
      <div data-testid="cart-array">
        List of cart item ids: {cartItems.map((i) => i._id)}
      </div>
      <button data-testid="clear-cart" onClick={() => clearCart()}>
        Clear cart
      </button>
      <button data-testid="add-to-cart" onClick={() => addToCart(itemOne)}>
        Add item 1 to cart
      </button>
      <button data-testid="add-to-cart-2" onClick={() => addToCart(itemTwo)}>
        Add item 2 to cart
      </button>
      <button
        data-testid="remove-from-cart"
        onClick={() => removeFromCart(itemOne)}
      >
        Remove item 1 from cart
      </button>
      {children}
    </div>
  );
};

describe("<CartContextProvider />", () => {
  test("context gives correct cart length", () => {
    const props = {
      cartItems: [
        { _id: "1", ...cartItemWithoutId },
        { _id: "2", ...cartItemWithoutId },
        { _id: "3", ...cartItemWithoutId },
      ],
    };

    render(
      <CartContextProvider>
        <CustomContextTest {...props}>Some content</CustomContextTest>
      </CartContextProvider>
    );
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 3"
    );
  });

  test("add to cart button works", async () => {
    const user = userEvent.setup();
    render(
      <CartContextProvider>
        <CustomContextTest>Some content</CustomContextTest>
      </CartContextProvider>
    );

    const addToCartButton = screen.getByTestId("add-to-cart");

    await user.click(addToCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 1"
    );
    expect(within(screen.getByTestId("cart-array")).getByText(/4/i));

    // Adding same item again, doesn't modify cart
    await user.click(addToCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 1"
    );
  });

  test("add two different products to cart", async () => {
    const user = userEvent.setup();
    render(
      <CartContextProvider>
        <CustomContextTest>Some content</CustomContextTest>
      </CartContextProvider>
    );

    // Add first item
    const addToCartButton = screen.getByTestId("add-to-cart");
    await user.click(addToCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 1"
    );
    expect(within(screen.getByTestId("cart-array")).getByText(/4/i));

    // Add second item
    const addToCartButton2 = screen.getByTestId("add-to-cart-2");
    await user.click(addToCartButton2);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 2"
    );
    expect(within(screen.getByTestId("cart-array")).getByText(/4/i));
    expect(within(screen.getByTestId("cart-array")).getByText(/5/i));
  });

  test("clear cart button works", async () => {
    const user = userEvent.setup();
    render(
      <CartContextProvider>
        <CustomContextTest>Some content</CustomContextTest>
      </CartContextProvider>
    );

    // Add one item to cart
    const addToCartButton = screen.getByTestId("add-to-cart");

    await user.click(addToCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 1"
    );

    // Clear cart
    const clearCartButton = screen.getByTestId("clear-cart");
    await user.click(clearCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 0"
    );
  });

  test("remove item from cart button works", async () => {
    const user = userEvent.setup();
    render(
      <CartContextProvider>
        <CustomContextTest>Some content</CustomContextTest>
      </CartContextProvider>
    );

    // Add one item to cart
    const addToCartButton = screen.getByTestId("add-to-cart");

    await user.click(addToCartButton);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 1"
    );

    // Remove item from cart
    const removeItemFromCart = screen.getByTestId("remove-from-cart");
    await user.click(removeItemFromCart);
    expect(screen.getByTestId("cart-length")).toHaveTextContent(
      "Cart length: 0"
    );
  });
});
