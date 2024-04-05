import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex">
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartTile cartItem={cartItem} />
            ))}
          </div>
          <p>
            <span>Total item</span>
            <span>:{cart.length}</span>
          </p>
          <p>
            <span>Total amount</span>
            <span>:{totalCart}</span>
          </p>
        </div>
      ) : (
        <div className="">
          <h1 className="">your cart is empty</h1>

          <Link to="/">
            <button>keep shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}
