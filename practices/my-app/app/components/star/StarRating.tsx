"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({
  numberOfStart,
}: {
  numberOfStart: number;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex: number) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex: number) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div>
      {[...Array(numberOfStart)].map((_, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <FaStar size={40} />
          </div>
        );
      })}
    </div>
  );
}
