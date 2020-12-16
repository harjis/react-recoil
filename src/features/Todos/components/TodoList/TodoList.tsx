import React from "react";
import { useRecoilValue } from "recoil";

import { todoListState } from "../../atoms";
import { TodoItemCreator } from "../TodoItemCreator/TodoItemCreator";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
