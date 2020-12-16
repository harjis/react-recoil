import { atom } from "recoil";

import { Todo } from "../types";
import { getTodos } from "../../../api/todos";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: getTodos(),
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
