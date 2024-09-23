import React, { useState, useEffect } from "react";
import Image from "next/image";
type Product = {
  id: number;
  title: string;
  thumbnail: string;
};
export default function LoadData() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div> loading data! please wait</div>;
  }
  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <Image src={item.thumbnail} alt={item.title} />
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button>load more products</button>
        {disableButton ? <p>you have reached to 100 product</p> : null}
      </div>
      loadData
    </div>
  );
}
