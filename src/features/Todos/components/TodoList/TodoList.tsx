import React from "react";
import { useRecoilValue } from "recoil";

import { filteredTodoListState } from "../../selectors";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoItemCreator } from "../TodoItemCreator/TodoItemCreator";
import { TodoListFilters } from "../TodoListFilters/TodoListFilter";
import { TodoListStats } from "../TodoListStats/TodoListStats";

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
