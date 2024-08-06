import React from "react";
import Link from "next/link";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartSidebar() {
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="fixed top-0 right-0 w-32 h-full overflow-scroll">
      {loading ? (
        <div>Loading</div>
      ) : cartItems.length === 0 ? (
        <div>cart is empty</div>
      ) : (
        <>
          <div>subtotal</div>
          <div>${itemsPrice}</div>
          <div>
            <Link href="/cart">Go to cart</Link>
          </div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <Link href={`/product/${item.id}`}>{item.name}</Link>
              <select
                value={item.qty}
                onChange={(e) => addToCartHandler(item, Number(e.target.value))}
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option
                    key={x + 1}
                    value={x + 1}
                    className="border border-black"
                  >
                    {x + 1}
                  </option>
                ))}
              </select>
              <button onClick={() => removeFromCartHandler(item.id)}>
                Delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
