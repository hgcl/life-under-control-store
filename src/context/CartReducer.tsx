import { CartState } from "../types";

type CartAction = { type: string; productId: string };

// Define the different types of cart actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHECKOUT = "CHECKOUT";
export const CLEAR = "CLEAR";

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartAdd = new Set(state.cartItems);
      newCartAdd.add(action.productId);

      return {
        ...state,
        cartItems: newCartAdd,
      };

    case REMOVE_FROM_CART:
      const newCartRemove = new Set(state.cartItems);
      newCartRemove.delete(action.productId);

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
