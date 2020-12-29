import React from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";

import { getId, getTodos } from "../../../api/todos";
import { todoIdsState, todoState } from "../atoms";
import { filteredTodoIdsState } from "../selectors";

export const useTodos = () => {
  const [todoIds, setTodoIds] = useRecoilState(todoIdsState);

  const loadTodos = useRecoilCallback(
    ({ set }) => async () => {
      const fetchedTodos = await getTodos();
      const ids = [];
      for (const todo of fetchedTodos) {
        ids.push(todo.id);
        set(todoState(todo.id), todo);
      }
      set(todoIdsState, ids);
    },
    []
  );
  React.useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = useRecoilCallback(
    ({ set }) => (text: string) => {
      const id = getId();
      setTodoIds((prevIds) => prevIds.concat(id));
      set(todoState(id), {
        id,
        text,
        isComplete: false,
      });
    },
    []
  );

  const removeTodo = (id: number) => {
    setTodoIds(todoIds.filter((todoId) => todoId !== id));
  };

  const filteredTodoIds = useRecoilValue(filteredTodoIdsState);

  return {
    filteredTodoIds,
    addTodo,
    removeTodo,
  };
};
