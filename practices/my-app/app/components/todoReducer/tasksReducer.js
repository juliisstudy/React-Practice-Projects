import React from "react";

export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete": {
      return tasks.filter((task) => task.id != action.id);
    }
    default: {
      throw Error("unknown action" + action.type);
    }
  }
  return <div>tasksReducer</div>;
}
