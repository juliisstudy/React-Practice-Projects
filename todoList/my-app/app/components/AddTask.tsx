import React, { useState } from "react";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      />
    </div>
  );
}
