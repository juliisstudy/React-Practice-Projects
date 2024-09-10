"use client";
import React, { useEffect, useState } from "react";

//color: hex#23421 rgb(234,323,322)

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function generateRandomColor() {
    if (typeOfColor === "hex") {
      createHEXColor();
    } else {
      createRGBColor();
    }
    console.log(typeOfColor);
  }

  function randomUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function createHEXColor() {
    const numbers = Array.from({ length: 10 }, (_, index) => index);

    // const letters = Array.from({ length: 6 }, (_, index) =>
    //   String.fromCharCode("A".charCodeAt(0) + index)
    // );
    const letters = "ABCDEF".split("");
    // String.fromCharCode(): Converts Unicode values to characters.
    const hex = [...numbers, ...letters];
    console.log(hex);
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function createRGBColor() {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);
    console.log(color);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") {
      createRGBColor();
    } else {
      createHEXColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button className="text-white" onClick={() => setTypeOfColor("hex")}>
        Generate HEX color
      </button>
      <button className="text-white" onClick={() => setTypeOfColor("rgb")}>
        Generate RGB color
      </button>

      <button className="text-white" onClick={generateRandomColor}>
        Generate Random color
      </button>
    </div>
  );
}
