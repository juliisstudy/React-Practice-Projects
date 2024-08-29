"use client";
import React, { useReducer } from "react";
import tasksReducer from "./tasksReducer";
import AddTask from "@/app/components/todoList/AddTask";

import TaskList from "@/app/components/todoList/TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask() {
    dispatch({ type: "added", id: nextId++, text: text });
  }
  function handleChangeTask(task) {
    dispatch({ type: "changed", task });
  }
  function handleDeleteTask(taskId) {
    dispatch({ type: "deleted", id: taskId });
  }
  return (
    <div>
      TaskApp
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        taskList={tasks}
      />
    </div>
  );
}
