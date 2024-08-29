import React, { useState } from "react";

export default function AddTask({ addTask }: { addTask: Function }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="add task"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          addTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
