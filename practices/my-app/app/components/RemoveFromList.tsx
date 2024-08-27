"use client";
import React, { useState } from "react";

type Artist = {
  id: number;
  name: string;
};
let initialArtists: Artist[] = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function RemoveFromList() {
  const [artists, setArtists] = useState(initialArtists);

  function handleRemove(id: number) {
    const newList = artists.filter((a: Artist) => a.id !== id);
    setArtists(newList);
  }

  return (
    <div>
      <h1>RemoveFromList</h1>
      {artists.map((artist) => (
        <li key={artist.id}>
          {artist.name}
          <button onClick={() => handleRemove(artist.id)}> remove</button>
        </li>
      ))}
    </div>
  );
}
