"use client";
import React, { useState } from "react";

export default function PlayerCounter() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      PlayerCounter
      {isPlayerA && <Counter key="Taylor" person="Taylor" />}
      {!isPlayerA && <Counter key="Sarah" person="Sarah" />}
      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        change
      </button>
    </div>
  );
}
function Counter({ person }: { person: string }) {
  const [score, setScore] = useState(0);

  return (
    <>
      <p>
        {person}:{score}
      </p>
      <button onClick={() => setScore(score + 1)}>add</button>;
    </>
  );
}
