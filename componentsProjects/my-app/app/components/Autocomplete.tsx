import React, { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";
import axios from "axios";
import ProductLists from "./ProductLists";

type Product = {
  id: number;
  title: string;
  image: string;
};
export default function Autocomplete() {
  return (
    <div>
      <AutocompleteSearch />
    </div>
  );
}

function AutocompleteSearch() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResult] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    console.log(event.target.value);
    setSearchResult(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowUp") {
    }
  }
  return (
    <div className="font-FiraCode flex flex-col max-w-lg mx-auto mt-20">
      <input
        type="text"
        className="px-4 py-1 border-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:border-blue-500"
        onChange={handleQueryChange}
      />
      {query !== "" && searchResults.length > 0 && (
        <ProductLists products={products} />
      )}
    </div>
  );
}
