import { render } from "@testing-library/react";
import CartContextProvider from "@/src/context/CartContextProvider";

const cartContextRender = (
  children: React.ReactNode,
  { providerProps: {}, ...renderOptions }
) => {
  return render(
    <CartContextProvider>{children}</CartContextProvider>,
    renderOptions
  );
};

export default cartContextRender;
