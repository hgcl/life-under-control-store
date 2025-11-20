import { render } from "@testing-library/react";
import CartContextProvider from "@/src/context/CartContextProvider";
import { CartState } from "../types";

// Custom render docs: https://testing-library.com/docs/react-testing-library/setup/

export function createWrapper(contextValues: CartState) {
  return function MockCartContextProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <CartContextProvider testState={contextValues}>
        {children}
      </CartContextProvider>
    );
  };
}

type contextValuesProps = { contextValues: CartState };

export const customRender = (
  ui: React.ReactNode,
  { contextValues, ...renderOptions }: contextValuesProps
) => {
  const wrapper = contextValues ? createWrapper(contextValues) : undefined;
  return render(ui, { wrapper, ...renderOptions });
};
