import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4">
        <Link href="/" className="">
          cart
        </Link>
        <div>
          <span className="cart-badg">
            {loading ? "" : cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
