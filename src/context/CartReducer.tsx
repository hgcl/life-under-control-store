import { CartItem, CartState } from "../types";

// Define the different types of cart actions
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

type CartAction =
  | {
      type: typeof ADD_TO_CART | typeof REMOVE_FROM_CART;
      payload: CartItem;
    }
  | {
      type: typeof CLEAR_CART;
    };

// Save cartItems to local storage
const updateLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

const CartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Does the item already exist in the cart?
      const exists = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (exists) {
        return state; // Do nothing if already exists
      }

      const cartItemsWithMore = [...state.cartItems, action.payload];
      updateLocalStorage(cartItemsWithMore);

      return {
        ...state,
        cartItems: cartItemsWithMore,
      };

    case REMOVE_FROM_CART:
      const cartItemsWithLess = [
        ...state.cartItems.filter((item) => item._id !== action.payload._id),
      ];

      updateLocalStorage(cartItemsWithLess);

      return {
        ...state,
        cartItems: cartItemsWithLess,
      };

    case CLEAR_CART:
      updateLocalStorage([]);
      return {
        ...state,
        cartItems: [],
      };

    // Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
