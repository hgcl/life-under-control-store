"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
// import Form from "next/form";
import { ShoppingBag } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import Banner from "./Banner";
import Link from "next/link";

function Header() {
  const { user } = useUser();

  const { cartItems } = useContext(CartContext);

  return (
    <header>
      <div>
        <Banner message={"This website is still under construction"} />
        <Link href="/">Life Under Control</Link>
        {/* SEARCH */}
        {/* TODO: implement accessible search feature */}
        {/* <Form action="/search">
          <input name="query" type="text" placeholder="Search for products" />
          <button type="submit">Submit</button>
        </Form> */}
        {/* CART */}
        <Link href="/cart">
          <ShoppingBag />
          <span>Cart</span> 
          <span id="cart-items-size">({cartItems.length})</span>
        </Link>
        {/* USER ACCOUNT */}
        {/* Only enable if Clerk is loaded */}
        <ClerkLoaded>
          {/* If user exists... */}
          {user && (
            <Link href="/orders">
              <span>Orders</span>
            </Link>
          )}

          {user ? <UserButton /> : <SignInButton mode="modal" />}
        </ClerkLoaded>
      </div>
    </header>
  );
}

export default Header;
