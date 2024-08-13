"use client";
import React, { createContext, useContext, useState } from "react";
import { ChevronFirst, ChevronLast } from "lucide-react";

const SideBarContext = createContext();
export default function SiderBar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className={`w-20 h-20 bg-red-500 ${expanded ? "w-32" : "w-0"}`}>
            logo
          </div>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>

        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}
export function SiderBarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SideBarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
            transition-colors group ${
              active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-500"
                : "hover:bg-indigo-400 text-gray-500"
            }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-32" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-200 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}
      {!expanded && (
        <div
          className={`absolute left-full rounded-md bg-red-100 text-indigo-50 invisible opacity-15 -translate-x-3 translate-all
            group-hover:visible group-hover:opacity-40 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
