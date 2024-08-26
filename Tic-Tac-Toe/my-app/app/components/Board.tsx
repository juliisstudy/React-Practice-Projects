import React, { useState } from "react";
import Square from "./Square";

type Params = {
  xIsNext: boolean;
  sqaures: string[];
  onPlay: Function;
};

export default function Board({ xIsNext, sqaures, onPlay }: Params) {
  function handleClick(i: number) {
    if (sqaures[i] || calculateWinner(sqaures)) {
      //if square already has value return or win
      return;
    }

    const nextSquares = sqaures.slice(); //make a copy of squares
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    nextSquares[i] = "X";
    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext); //take turn
  }

  function calculateWinner(sqaures: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        sqaures[a] &&
        sqaures[a] === sqaures[b] &&
        sqaures[a] === sqaures[c]
      ) {
        return sqaures[a];
      }
    }
    return null;
  }

  //display status
  const winner = calculateWinner(sqaures);
  let status;
  if (winner) {
    status = "Winder is " + winner;
  } else {
    status = "next player" + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={sqaures[0]} onSqureClick={() => handleClick(0)} />
        <Square value={sqaures[1]} onSqureClick={() => handleClick(1)} />
        <Square value={sqaures[2]} onSqureClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={sqaures[3]} onSqureClick={() => handleClick(3)} />
        <Square value={sqaures[4]} onSqureClick={() => handleClick(4)} />
        <Square value={sqaures[5]} onSqureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={sqaures[6]} onSqureClick={() => handleClick(6)} />
        <Square value={sqaures[7]} onSqureClick={() => handleClick(7)} />
        <Square value={sqaures[8]} onSqureClick={() => handleClick(8)} />
      </div>
    </>
  );
}
