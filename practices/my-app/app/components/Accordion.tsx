"use client";
import React, { ReactNode, useState } from "react";

export default function Accordion() {
  return (
    <div>
      <Panel title="h1">
        <p>h1</p>
      </Panel>
      <Panel title="h2">
        <p>h2</p>
      </Panel>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(!isActive)}>show</button>
      )}
    </div>
  );
}
