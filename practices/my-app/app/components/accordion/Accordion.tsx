"use client";
import React, { useState } from "react";
import data from "./data";
// single selection
export default function Accordion() {
  const [selected, setSelected] = useState<number | null>(null);
  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId);
  }
  return (
    <div className="flex h-100vh w-100vw justify-center align-middle">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="w-56"
              onClick={() => handleSingleSelection(item.id)}
              key={item.id}
            >
              <h1>{item.question}</h1>

              {item.id === selected ? (
                <div>
                  {item.answear}
                  <span>-</span>
                </div>
              ) : (
                <span>+</span>
              )}
            </div>
          ))
        ) : (
          <p>no data found</p>
        )}
      </div>
    </div>
  );
}
