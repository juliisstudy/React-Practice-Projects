"use client";
import React, { useState } from "react";

//two separate counters
export default function CountersAndState() {
  return (
    <div>
      CountersAndState
      <Counter />
      <Counter />
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = "font-bold";
  if (hover) {
    className += "hover:text-red-200";
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
