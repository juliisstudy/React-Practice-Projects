"use client";
import React, { useState } from "react";
import { sculptureList } from "@/app/lib/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleShowmore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleNextClick}>next</button>
      <h2>{sculpture.name}</h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleShowmore}>more</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
