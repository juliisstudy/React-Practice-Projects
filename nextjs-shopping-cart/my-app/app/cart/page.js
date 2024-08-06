"use client";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart(...product, qty));
  };
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : cartItems.length === 0 ? (
        <div>
          cart is empty.<Link href="/">go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          {cartItems.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
          <div>
            <ul>
              <li>
                subtotal({cartItems.reduce((a, c) => a + c.qty, 0)}):$
                {itemsPrice}
              </li>
              <li>
                <button onClick={() => router.push("/shipping")}>
                  process to checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
