import React from "react";

import { TodoItem } from "../TodoItem/TodoItem";
import { TodoItemCreator } from "../TodoItemCreator/TodoItemCreator";
import { TodoListFilters } from "../TodoListFilters/TodoListFilter";
import { TodoListStats } from "../TodoListStats/TodoListStats";
import { useTodos } from "../../hooks/useTodos";

export const TodoList = () => {
  const { filteredTodoIds, addTodo, removeTodo } = useTodos();

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator addTodo={addTodo} />

      {filteredTodoIds.map((todoId) => (
        <TodoItem key={todoId} todoId={todoId} removeTodo={removeTodo} />
      ))}
    </>
  );
};
