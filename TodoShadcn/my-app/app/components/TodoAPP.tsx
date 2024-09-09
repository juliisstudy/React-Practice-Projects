"use client";
import React from "react";
import { useImmerReducer } from "use-immer";
import { TasksReducer } from "./TasksReducer";
import { TaskList } from "./Task";
import AddTask from "./AddTask";
export type TasksType = {
  id: number;
  text: string;
  done: boolean;
};
let nextId = 3;
const initialTasks: TasksType[] = [
  { id: 0, text: "Practice Javascript", done: true },
  { id: 1, text: "Work on the Project", done: true },
  { id: 2, text: "Exercise", done: true },
];
export default function TodoAPP() {
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
    <div className="mt-auto">
      <h1 className="text-slate-50 text-center font-bold text-3xl ">
        Todo List
      </h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
