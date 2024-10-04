import React, { useState } from "react";
import { TasksType } from "./TodoAPP";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Task({
  task,
  onChangeTask,
  onDelete,
}: {
  task: TasksType;
  onChangeTask: (task: TasksType) => void;
  onDelete: (taskid: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (!isEditing) {
    taskContent = (
      <>
        <Input
          className="text-slate-400 "
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <Button
          onClick={() => setIsEditing(true)}
          className="text-slate-700 font-bold w-16 bg-slate-200 rounded-sm ml-5 hover:bg-slate-500"
        >
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p className="text-slate-400 w-60 pl-4 pt-2"> {task.text}</p>
        <Button
          onClick={() => setIsEditing(false)}
          className="text-slate-700 w-16 font-bold bg-slate-200 rounded-sm ml-5 hover:bg-slate-500"
        >
          Edit
        </Button>
      </>
    );
  }
  return (
    <div className="mt-5">
      <label className="flex flex-row ">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
          className="mr-2 p-4 pl-2"
        />
        {taskContent}
        <Button
          onClick={() => onDelete(task.id)}
          className="text-slate-700 w-16 font-bold bg-slate-200 rounded-sm ml-5 hover:bg-slate-500"
        >
          Delete
        </Button>
      </label>
    </div>
  );
}

export function TaskList({
  tasks,
  onChangeTask,
  onDeleteTask,
}: {
  tasks: TasksType[];
  onChangeTask: (task: TasksType) => void;
  onDeleteTask: (taskId: number) => void;
}): React.JSX.Element {
  return (
    <ul className="">
      {tasks.map((task: TasksType) => (
        <li key={task.id} className="border-b-slate-600 bg-slate-900">
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
