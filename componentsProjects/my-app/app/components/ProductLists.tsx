import React from "react";
type Product = {
  id: number;
  title: string;
  image: string;
};

export default function ProductLists({ products }: { products: Product[] }) {
  return (
    <div className="bg-white max-h-96 overflow-y-scroll resultProductContainer">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="py-2 px-4 flex items-center justify-between gap-8 hover:bg-gray-600 cursor-pointer"
        >
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} className="w-8" />
        </div>
      ))}
    </div>
  );
}
