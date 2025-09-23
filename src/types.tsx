// Cart context

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  image: string;
};

export type CartState = {
  cartItems: CartItem[];
  checkout: boolean;
};
