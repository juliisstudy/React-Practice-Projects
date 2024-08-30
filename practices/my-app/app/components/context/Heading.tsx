import React, { ReactNode, useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }: { children: ReactNode }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error("heading must be inside a section");
    case 1:
      return <h1 className="border border-red-500">{children}</h1>;
    case 2:
      return <h2 className="border border-blue-700">{children}</h2>;
    case 3:
      return <h3 className="border border-green-700">{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    default:
      throw Error("unknow level" + level);
  }
}
