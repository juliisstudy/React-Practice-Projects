"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckoutWizard from "../components/CheckoutWizard";
import Link from "next/link";
export default function PlaceOrderScreen() {
  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    shippingAddress,
    loading,
  } = useSelector((state) => state.cart);
  const router = useRouter();
  useEffect(() => {
    if (!paymentMethod) {
      router.push("/payment");
    }
  }, [paymentMethod, router]);
  return (
    <div>
      <CheckoutWizard activeStep={3} />
      {loading ? (
        <div>loading</div>
      ) : cartItems.length === 0 ? (
        <div>
          cart is empty <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div>
          <div>
            {shippingAddress.fullName},{shippingAddress.address}
          </div>
          <div>
            <Link href="/shipping">Edit</Link>
          </div>
        </div>
      )}
    </div>
  );
}
