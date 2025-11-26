"use client";

import { createContext, useReducer } from "react";
import CartReducer, {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from "./CartReducer";
import { CartItem, CartState } from "../types";

// Get `cartItems` from local storage, if the cart has already been initialized
let storage: CartItem[] = [];

if (
  typeof window !== "undefined" && // makes sure that this logic only runs after the browser loads the page
  typeof localStorage.getItem("cartItems") === "string"
) {
  // Fine to typecast here, we check that the localStorage item is a string in conditions
  storage = JSON.parse(localStorage.getItem("cartItems") as string);
}

// TODO: simplify CartState to directly be the cartItems array, instead of {[{xx},{xx},{xx}]}
const initialCartState: CartState = {
  cartItems: storage,
};

// `initialCartContext` is used by TypeScript to infer the context types. We need to create dummy functions, so that the context gets initialized with the intended types. These will be overridden with the real ones.
/* eslint-disable  @typescript-eslint/no-unused-vars */
const initialCartContext = {
  addToCart: (_product: CartItem) => {},
  removeFromCart: (_product: CartItem) => {},
  clearCart: () => {},
  ...initialCartState,
};

export const CartContext = createContext(initialCartContext);

export const CartContextProvider = ({
  children,
  testState,
}: {
  children: React.ReactNode;
  testState?: CartState;
}) => {
  // Initial cart state is complex, so we will need to use useReduce instead of useState
  // eslint-disable-next-line  prefer-const
  let [state, dispatch] = useReducer(CartReducer, initialCartState);

  // Replace `state` with `testState` when context data needs to be initialized to specific values in tests
  if (testState) {
    state = testState;
  }

  // Function to handle when an item is added from the store into the cart
  // `dispatch()` works with useReducer: https://react.dev/reference/react/useReducer#dispatch
  const addToCart = (payload: CartItem) => {
    dispatch({
      type: ADD_TO_CART,
      payload,
    });
  };

  const removeFromCart = (payload: CartItem) => {
    dispatch({ type: REMOVE_FROM_CART, payload });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    // Add the functions that have been defined above into the Context provider, and pass on to the children
    <CartContext
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        ...state,
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartContextProvider;
