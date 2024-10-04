"use client";
import React, { useState } from "react";

export default function DropdownMenu({ options }: { options: string[] }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <button
      className="bg-gray-400 hover:bg-slate-200 "
      onClick={() => setIsExpanded(!isExpanded)}
    >
      adfdsf
      {isExpanded && (
        <div className="bg-white boder">
          {options.map((option) => (
            <li
              className="hover:bg-blue-50 hover:text-white py-1 px-1 cursor-pointer "
              key={option}
            >
              {option}
            </li>
          ))}
        </div>
      )}
    </button>
  );
}
