"use client";
import React, { useState } from "react";

let initialCounters: number[] = [0, 0, 0];

export default function Counter() {
  const [counterArray, setCounter] = useState(initialCounters);

  function handleCount(index: number) {
    const nextCounterArray: number[] = counterArray.map(
      (c: number, i: number) => {
        if (index === i) {
          return (c += 1);
        } else {
          return c;
        }
      }
    );

    setCounter(nextCounterArray);
  }
  return (
    <div>
      Counter
      <ul>
        {counterArray.map((c: number, i: number) => (
          <li key={i}>
            {c}
            <button onClick={() => handleCount(i)}>add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
