"use client";

import styles from "./Header.module.css";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, ShoppingBag } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import Banner from "./Banner";
import Link from "next/link";
import Logo from "./Logo";
import IconButton from "./IconButton";

function Header() {
  const { user } = useUser();

  const { cartItems } = useContext(CartContext);
  const currentCart =
    cartItems.length > 0 ? `Cart (${cartItems.length})` : `Cart`;

  return (
    <header id={styles.header}>
      <a id={styles.skip} href="#main">
        Skip to content
      </a>
      <Banner message={"This website is still under construction"} />
      <nav>
        <ul id={styles.navList}>
          <li>
            <Link href="/">
              <Logo width="64" height="auto" fill="black" />
              <span className="visually-hidden">Life Under Control</span>
            </Link>
          </li>
          {/* CART */}
          <li className={styles.cart}>
            <IconButton href="/cart" label={currentCart}>
              <ShoppingCart />
            </IconButton>
          </li>
          {/* USER ACCOUNT */}
          {/* Only enable if Clerk is loaded */}
          <ClerkLoaded>
            {/* If user exists... */}
            {user && (
              <li>
                <IconButton href="/orders" label="Orders">
                  <ShoppingBag />
                </IconButton>
              </li>
            )}

            {user ? <UserButton /> : <SignInButton mode="modal" />}
          </ClerkLoaded>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
