import { Todo } from "../features/Todos/types";

let id = 1;
export function getId() {
  return id++;
}

const todos = [getId(), getId(), getId(), getId(), getId()].reduce<Todo[]>(
  (acc, cur) => {
    return acc.concat({ id: cur, text: `Todo ${cur}`, isComplete: false });
  },
  []
);

export const getTodos = (): Promise<Todo[]> =>
  new Promise<Todo[]>((resolve) => {
    setTimeout(() => resolve(todos), 1000);
  });
