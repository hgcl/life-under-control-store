"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
// import Form from "next/form";
import { ShoppingBag } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

function Header() {
  const { user } = useUser();

  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <div>
        <a href="/">Life Under Control</a>
        {/* SEARCH */}
        {/* TODO: implement accessible search feature */}
        {/* <Form action="/search">
          <input name="query" type="text" placeholder="Search for products" />
          <button type="submit">Submit</button>
        </Form> */}
        {/* CART */}
        {/* TODO: check hydration error for cart item count
        https://react.dev/reference/react-dom/client/hydrateRoot */}
        <a href="/cart">
          <ShoppingBag />
          <span>Cart</span> 
          <span id="cart-items-size">({cartItems.length})</span>
        </a>
        {/* USER ACCOUNT */}
        {/* Only enable if Clerk is loaded */}
        <ClerkLoaded>
          {/* If user exists... */}
          {user && (
            <a href="/orders">
              <span>Orders</span>
            </a>
          )}

          {user ? <UserButton /> : <SignInButton mode="modal" />}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
