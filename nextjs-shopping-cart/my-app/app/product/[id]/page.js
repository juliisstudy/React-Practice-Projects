import React from "react";
import Link from "next/link";
import ProductRate from "@/app/components/ProductRating";
import AddToCart from "@/app/components/AddToCart";
import { data } from "@/app/utils/data";
export default function page({ params: { id } }) {
  const product = data.products.find((x) => x.id === id);
  if (!product) {
    return <div>product not find</div>;
  }
  return (
    <div>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">{product.id}</div>
      </div>
      <div>
        <ul>
          <li>{product.name}</li>
          <li>
            <ProductRate rate={product.rating} count={product.numReviews} />
          </li>
          <li>{product.description}</li>
        </ul>
      </div>
      <div>
        <div>Price</div>
        <div>${product.price}</div>
        <AddToCart product={product} redirect={true} />
      </div>
    </div>
  );
}
