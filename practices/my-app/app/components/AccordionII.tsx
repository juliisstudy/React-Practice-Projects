"use client";
import React, { ReactNode, useState } from "react";

//share state between components
//lifting state up, moving state into the common parent allowed you to coordinate the two panels

export default function AccordionII() {
  const [isActiveIndex, setActiveIndex] = useState(0);

  return (
    <div>
      AccordionII
      <Panel
        isActive={isActiveIndex === 1}
        title="h1"
        handleClick={() => setActiveIndex(1)}
      >
        H1
      </Panel>
      <Panel
        isActive={isActiveIndex === 2}
        title="h2"
        handleClick={() => setActiveIndex(2)}
      >
        H2
      </Panel>
    </div>
  );
}

function Panel({
  isActive,
  children,
  title,
  handleClick,
}: {
  isActive: boolean;
  children: ReactNode;
  title: string;
  handleClick: any;
}) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? (
        <div>{children}</div>
      ) : (
        <button onClick={handleClick}>More</button>
      )}
    </div>
  );
}
