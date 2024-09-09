import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function AddTask({
  onAddTask,
}: {
  onAddTask: (text: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-row gap-5 mt-11">
      <Input
        placeholder="add a task"
        className="text-slate-400"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
        className="text-slate-700 font-bold bg-slate-200 rounded-sm ml-5 hover:bg-slate-500"
      >
        Add A New Task
      </Button>
    </div>
  );
}
