import React from "react";

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <div>
      {["User Login", "Shipping address", "payment method", "place order"].map(
        (step, index) => (
          <div
            key={step}
            className={`flex-1 border-b-2 text-center
                        ${
                          index <= activeStep
                            ? "border-indigo-500 text-indigo-300"
                            : "border-gray-400 text-gray-300"
                        }
                            `}
          >
            {step}
          </div>
        )
      )}
    </div>
  );
}
