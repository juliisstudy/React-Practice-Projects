"use client";
import React, { useState } from "react";
import { Counter } from "@/app/components/CountersAndState";

// react removes a component
export default function CounterDestroysState() {
  const [showB, setShowB] = useState(true);

  return (
    <div>
      CounterDestroysState
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => setShowB(e.target.checked)}
        />
      </label>
    </div>
  );
}
