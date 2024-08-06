"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "@/redux/slices/cartSlice";
import CheckoutWizard from "../components/CheckoutWizard";

export default function ShippingAddressPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);
  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    router.push("/payment");
  };
  return (
    <div>
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="fullName">fullName</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register("fullName", {
              required: "please enter full name",
              minLength: {
                value: 3,
                message: "Address is more than 2 chars",
              },
            })}
          />
          {errors.fullName && <div className="">{errors.fullName.message}</div>}
        </div>
        <div>
          <label htmlFor="address">address</label>
          <input
            className="w-full"
            id="address"
            autoFocus
            {...register("address", {
              required: "please enter full address",
              minLength: {
                value: 3,
                message: "Address is more than 2 chars",
              },
            })}
          />
          {errors.address && <div className="">{errors.address.message}</div>}
        </div>
        <div>
          <button>Next</button>
        </div>
      </form>
    </div>
  );
}
