import React, { useState } from "react";
import { TasksType } from "./TodoReduceAPP";

export default function Task({
  task,
  onChangeTask,
  onDelete,
}: {
  task: TasksType;
  onChangeTask: Function;
  onDelete: Function;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (!isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(true)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(false)}>edit</button>
      </>
    );
  }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChangeTask({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
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
  onChangeTask: Function;
  onDeleteTask: Function;
}) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
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
