"use client";

import { createContext, useReducer } from "react";
import CartReducer, { ADD_TO_CART, REMOVE_FROM_CART } from "./CartReducer";
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

const initialCartState: CartState = {
  cartItems: storage,
  checkout: false,
};

// `initialCartContext` is used by TypeScript to infer the context types. We need to create dummy functions, so that the context gets initialized with the intended types. These will be overridden with the real ones.
const initialCartContext = {
  addToCart: (_product: CartItem) => {},
  removeFromCart: (_product: CartItem) => {},
  ...initialCartState,
};

export const CartContext = createContext(initialCartContext);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  // Initial cart state is complex, so we will need to use useReduce instead of useState
  const [state, dispatch] = useReducer(CartReducer, initialCartState);

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
