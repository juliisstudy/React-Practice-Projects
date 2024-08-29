import React, { useState } from "react";

export default function TaskList({
  onDeleteTask,
  taskList,
  onChangeTask,
}: {
  taskList: Task[];
  onDeleteTask: Function;
  onChangeTask: Function;
}) {
  return (
    <div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChangeTask={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Task({
  task,
  onChangeTask,
  onDelete,
}: {
  task: Task;
  onChangeTask: Function;
  onDelete: Function;
}) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    //is Editing
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
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
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
  );
}
