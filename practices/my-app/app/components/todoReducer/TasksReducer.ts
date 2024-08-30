import type { ImmerReducer } from "use-immer";
import type { TasksType } from "./TodoReduceAPP";

type ActionType =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: TasksType }
  | { type: "deleted"; id: number };

export const TasksReducer: ImmerReducer<TasksType[], ActionType>=(drafttasks: TasksType[] | any,
  action: ActionType)=> {
  switch (action.type) {
    case "added":
      drafttasks.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    case "changed": {
      const index = drafttasks.findIndex(
        (task: TasksType) => task.id === action.task.id
      );
      drafttasks[index] = action.task;
      break;
    }
    case "deleted": {
      return drafttasks.filter((task: TasksType) => task.id !== action.id);
    }
    default: {
      throw Error("unknown action" + action);
    }
  }
  
}
