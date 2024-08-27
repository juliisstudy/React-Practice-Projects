import React from "react";

type Params = {
  value: string;
  onSqureClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Square({ value, onSqureClick }: Params) {
  return (
    <button
      className="border border-slate-400 w-32 h-32 font-bold text-3xl"
      onClick={onSqureClick}
    >
      {value}
    </button>
  );
}
