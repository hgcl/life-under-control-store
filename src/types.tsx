// Cart context

export type CartItem = {
  _id: string;
  name: string;
  price: number;
};

export type CartState = {
  cartItems: CartItem[];
  checkout: boolean;
};
