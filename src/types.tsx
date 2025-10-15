// Cart context

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  slug: string;
  image: string;
  description: string;
};

export type CartState = {
  cartItems: CartItem[];
};
