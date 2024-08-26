import React from "react";

type Params = {
  value: string;
  onSqureClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Square({ value, onSqureClick }: Params) {
  return (
    <button className="border border-red-200 w-10 h-10" onClick={onSqureClick}>
      {value}
    </button>
  );
}
