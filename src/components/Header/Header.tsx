"use client";

import styles from "./Header.module.css";
import { getCurrentCart } from "./Header.utils";
import Logo from "../Logo";
import { CartContext } from "../../context/CartContextProvider";

// Imports: external libraries
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart, ShoppingBag } from "react-feather";
import { useContext } from "react";
import Link from "next/link";
import IconButton from "@hgcle/ui-library/IconButton";
import Button from "@hgcle/ui-library/Button";

function Header() {
  const { user } = useUser();

  const { cartItems } = useContext(CartContext);

  const currentCart = getCurrentCart(cartItems);

  return (
    <header id={styles.Header}>
      <nav>
        <ul id={styles.NavList}>
          <li>
            <Link id={styles.Logo} href="/">
              <Logo fill="var(--fg-normal)" />
              <span className="visually-hidden">Life Under Control</span>
            </Link>
          </li>
          {/* CART */}
          <li>
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

            <li>
              {user ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <Button>Sign in</Button>
                </SignInButton>
              )}
            </li>
          </ClerkLoaded>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
