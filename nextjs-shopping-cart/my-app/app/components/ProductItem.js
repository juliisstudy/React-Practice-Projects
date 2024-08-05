import React from "react";
import Link from "next/link";
import ProductRate from "./ProductRating";
import AddToCart from "./AddToCart";
export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>{product.name}</Link>
      <div className="flex flex-col ">
        <Link href={`/product/${product.id}`}>{product.name}</Link>
        <ProductRate rate={product.rating} count={product.numReviews} />
        <p>{product.brand}</p>
        <p>${product.price}</p>
        <AddToCart
          showQty={false}
          product={product}
          increatePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  );
}
