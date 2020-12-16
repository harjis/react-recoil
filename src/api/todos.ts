import { Todo } from "../features/Todos/types";

const todos: Todo[] = [
  { id: 1, text: "Todo 1", isComplete: false },
  { id: 2, text: "Todo 2", isComplete: false },
  { id: 3, text: "Todo 3", isComplete: false },
  { id: 4, text: "Todo 4", isComplete: false },
  { id: 5, text: "Todo 5", isComplete: false },
];

export const getTodos = (): Promise<Todo[]> =>
  new Promise<Todo[]>((resolve) => {
    setTimeout(() => resolve(todos), 1000);
  });
