import { atom, atomFamily, selectorFamily } from "recoil";

import { Todo } from "../types";

export const todoIdsState = atom<number[]>({
  key: "todoIdsState",
  default: [],
});

const tempTodo = atomFamily<Todo | null, number>({
  key: "todo",
  default: null,
});
export const todoState = atomFamily<Todo, number>({
  key: "todoState",
  default: selectorFamily<Todo, number>({
    key: "todoState/default",
    get: (todoId) => ({ get }) => {
      const todo = get(tempTodo(todoId));
      if (todo === null) {
        throw new Error(`Fatal error: Todo with id ${todoId} was not found`);
      }
      return todo;
    },
    set: (todoId) => ({ set }, newTodo) => set(tempTodo(todoId), newTodo),
  }),
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All",
});
