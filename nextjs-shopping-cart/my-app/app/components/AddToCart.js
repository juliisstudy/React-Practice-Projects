"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";
export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = true,
}) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const addToCartHandler = async () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          return alert("no more product exist");
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));
    if (redirect) router.push("/cart");
  };

  return (
    <>
      {product.countInStock > 0 && showQty && (
        <div className="border border-blue-700">
          <div>qty</div>
          <select
            className="border border-blue-700"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          >
            {[...Array(product.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        {product.countInStock > 0 ? (
          <button onClick={addToCartHandler}>add to cart</button>
        ) : (
          <button disabled>outofstock</button>
        )}
      </div>
    </>
  );
}
