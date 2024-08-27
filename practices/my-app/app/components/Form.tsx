"use client";
import React, { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({
    name: "juli",
    skills: {
      title: "react",
      year: "2",
    },
  });
  function handleNameChange(e: { target: HTMLInputElement }) {
    setPerson({ ...person, name: e.target.value });
  }
  function handleSkillChange(e: { target: HTMLInputElement }) {
    setPerson({
      ...person,
      skills: {
        ...person.skills,
        title: e.target.value,
      },
    });
  }

  return (
    <div>
      <form>
        <label>
          Name
          <input value={person.name} onChange={handleNameChange} />
        </label>
        <label>
          title
          <input value={person.skills.title} onChange={handleSkillChange} />
        </label>
      </form>
      <p>{person.name}</p>
      <p>{person.skills.title}</p>
    </div>
  );
}
