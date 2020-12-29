import { atom, atomFamily } from "recoil";

import { Todo } from "../types";

export const todoIdsState = atom<number[]>({
  key: "todoIdsState",
  default: [],
});

export const todoState = atomFamily<Todo, number>({
  key: "todoState",
  default: {} as Todo, // disable typechecks lol
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
