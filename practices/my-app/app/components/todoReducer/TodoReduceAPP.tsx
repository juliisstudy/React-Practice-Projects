"use client";
import React from "react";
import { useImmerReducer } from "use-immer";
import { TasksReducer } from "./TasksReducer";
import AddTask from "./AddTask";
import { TaskList } from "./TaskList";


export type TasksType = {
  id: number;
  text: string;
  done: boolean;
};
let nextId = 3;

const initialTasks: TasksType[] = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
export default function TodoReduceAPP() {
  const [tasks, dispatch] = useImmerReducer(TasksReducer, initialTasks);
  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  };
  const handleChangeTask = (task: TasksType) => {
    dispatch({
      type: "changed",
      task: task,
    });
  };
  const handleDeleteTask = (taskId: number) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <div>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
