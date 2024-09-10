"use client";
import React, { useState } from "react";
import data from "./data";
// single selection and multi selection
export default function MultiAccordion() {
  const [selected, setSelected] = useState<number | null>(null);
  const [multi, setMulti] = useState<boolean>(false);
  const [multiSelect, setMultiSelected] = useState<number[]>([]);

  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function enableMultiSelection() {
    setMulti(!multi);
  }

  function handlemultiSelect(getCurrentId: number) {
    let copylist = [...multiSelect];
    const findIndexOfcurrentId = copylist.indexOf(getCurrentId);
    if (findIndexOfcurrentId === -1) {
      copylist.push(getCurrentId);
    } else {
      copylist.splice(findIndexOfcurrentId, 1); //remove
    }
    setMultiSelected(copylist);
  }

  return (
    <div className="flex h-100vh w-100vw justify-center align-middle">
      <button onClick={enableMultiSelection}>Multiselection</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="w-56"
              onClick={
                multi
                  ? () => handlemultiSelect(item.id)
                  : () => handleSingleSelection(item.id)
              }
              key={item.id}
            >
              {multi
                ? multiSelect.indexOf(item.id) !== -1 && (
                    <div>{item.answear}</div>
                  )
                : selected === item.id && <div>{item.answear}</div>}
            </div>
          ))
        ) : (
          <p>no data found</p>
        )}
      </div>
    </div>
  );
}
