"use client";
import React, { useState } from "react";

export default function CounterFancy() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      CounterFancy
      {isFancy ? (
        <div>
          <Counter isFancy={true} />
        </div>
      ) : (
        //if change the div to section the state will be destoryed
        <div>
          <Counter isFancy={false} />
        </div>
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        fancy string
      </label>
    </div>
  );
}

function Counter({ isFancy }: { isFancy: boolean }) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  let className = "font-bold";
  if (hover) {
    className += "hover:text-red-200";
  }
  if (isFancy) {
    className += "border border-red";
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
