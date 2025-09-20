"use client";

import { createContext, useReducer } from "react";
import CartReducer, { ADD_TO_CART, REMOVE_FROM_CART } from "./CartReducer";
import { CartState } from "../types";

const initialCartState: CartState = {
  cartItems: new Set(),
  checkout: false,
};

// `initialCartContext` is used by TypeScript to infer the context types. We need to create dummy functions, so that the context gets initialized with the intended types. These will be overridden with the real ones.
const initialCartContext = {
  addToCart: (_productId: string) => {},
  removeFromCart: (_productId: string) => {},
  ...initialCartState,
};

export const CartContext = createContext(initialCartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Initial cart state is complex, so we will need to use useReduce instead of useState
  const [state, dispatch] = useReducer(CartReducer, initialCartState);

  // Function to handle when an item is added from the store into the cart
  // `dispatch()` works with useReducer: https://react.dev/reference/react/useReducer#dispatch
  const addToCart = (productId: string) => {
    dispatch({ type: ADD_TO_CART, productId });
  };

  const removeFromCart = (productId: string) => {
    dispatch({ type: REMOVE_FROM_CART, productId });
  };

  return (
    // Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext
      value={{
        addToCart,
        removeFromCart,
        ...state,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContextProvider;
