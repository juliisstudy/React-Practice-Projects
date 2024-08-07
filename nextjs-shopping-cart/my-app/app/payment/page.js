"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "@/redux/slices/cartSlice";
import CheckoutWizard from "../components/CheckoutWizard";

export default function PaymentPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }
    setValue("paymentMethod", paymentMethod);
  }, [paymentMethod, shippingAddress, router, setValue]);

  const submitHandler = ({ paymentMethod }) => {
    dispatch(savePaymentMethod(paymentMethod));
    router.push("/placeorder");
  };
  return (
    <div>
      <CheckoutWizard activeStep={2} />
      <form onSubmit={handleSubmit(submitHandler)}>
        {["payPal", "Stript", "CashOnDelivery"].map((payment) => (
          <div key={payment}>
            <input
              name="paymentMethod"
              id={payment}
              type="radio"
              value={payment}
              {...register("paymentMethod", {
                require: "please select payment method",
              })}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
            {errors.paymentMethod && (
              <div className="text-red-200">{errors.paymentMethod.message}</div>
            )}
          </div>
        ))}
        <div>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
}
