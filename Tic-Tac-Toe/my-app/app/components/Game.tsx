"use client";
import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares: number[], move: number) => {
    let description;
    if (move > 0) {
      description = "Go to move " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="mt-4 hover:text-slate-500">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="flex flex-row gap-10">
        <div>
          <Board
            xIsNext={xIsNext}
            sqaures={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="mt-20 font-normal  ">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
