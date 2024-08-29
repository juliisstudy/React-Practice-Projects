"use client";
import React, { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function Todo() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text: string) {
    const newTaskList = [...tasks, { id: nextId++, text: text, done: false }];
    setTasks(newTaskList);
  }

  function handleChangeTask(task: Task) {
    const newTastList = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTasks(newTastList);
  }
  function handeleDelete(taskId: number) {
    const newTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(newTaskList);
  }
  return (
    <div>
      <AddTask addTask={handleAddTask} />
      <TaskList
        onChangeTask={handleChangeTask}
        onDeleteTask={handeleDelete}
        taskList={tasks}
      />
    </div>
  );
}
