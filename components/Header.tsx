"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Form from "next/form";
import { ShoppingBag } from "react-feather";

function Header() {
  const { user } = useUser();
  return (
    <header>
      <div>
        <a href="/">Life Under Control</a>

        {/* SEARCH */}
        {/* TODO: review accessibility of this search form section */}
        {/* TODO: make search work with working data */}
        <Form action="/search">
          <input name="query" type="text" placeholder="Search for products" />
          <button type="submit">Submit</button>
        </Form>

        {/* BASKET */}
        <a href="/basket">
          <ShoppingBag />
          {/* TODO: add item count */}
          <span>Basket</span>
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
