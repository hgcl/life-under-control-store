import { CartState } from "../types";

type CartAction = { type: string; productId: string };

// Define the different types of cart actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHECKOUT = "CHECKOUT";
export const CLEAR = "CLEAR";

// Save cartItems to local storage
const updateLocalStorage = (cartItems: Set<string>) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.size > 0 ? [...cartItems] : [])
  );
};

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartAdd = new Set(state.cartItems);
      newCartAdd.add(action.productId);
      updateLocalStorage(newCartAdd);

      return {
        ...state,
        cartItems: newCartAdd,
      };

    case REMOVE_FROM_CART:
      const newCartRemove = new Set(state.cartItems);
      newCartRemove.delete(action.productId);
      updateLocalStorage(newCartRemove);

      return {
        ...state,
        cartItems: newCartRemove,
      };

    // Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
