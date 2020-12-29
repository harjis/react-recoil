import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { todoState } from "../atoms";

export const useTodo = (todoId: number) => {
  const [todo, setTodo] = useRecoilState(todoState(todoId));

  const editItemText = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setTodo((todo) => ({
      ...todo,
      text: value,
    }));
  };

  const toggleItemCompletion = () => {
    setTodo((todo) => ({ ...todo, isComplete: !todo.isComplete }));
  };

  return {
    todo,
    editItemText,
    toggleItemCompletion,
  };
};
