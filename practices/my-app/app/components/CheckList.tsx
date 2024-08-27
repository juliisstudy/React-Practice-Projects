"use client";
import React, { useState } from "react";

type Artwork = {
  id: number;
  title: string;
  seen: boolean;
};
const initialList: Artwork[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function CheckList() {
  const [list, setList] = useState(initialList);

  function handleToggle(artId: number, nextSeen: boolean) {
    //handle a list of checklist
    const newList: Artwork[] = list.map((artwork) => {
      if (artwork.id === artId) {
        //find the object that need update
        return { ...artwork, seen: nextSeen }; //copy and update
      } else {
        return artwork;
      }
    });
    setList(newList);
  }
  return (
    <div>
      <ItemList artworks={list} onToggle={handleToggle} />
    </div>
  );
}

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: Artwork[];
  onToggle: Function;
}) {
  return (
    <ul>
      {artworks.map((artwork: Artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => onToggle(artwork.id, e.target.checked)}
            />
          </label>
          {artwork.title}
        </li>
      ))}
    </ul>
  );
}
