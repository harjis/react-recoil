import React from "react";

import { useTodo } from "../../hooks/useTodo";

type Props = {
  todoId: number;
  removeTodo: (todoId: number) => void;
};
export const TodoItem: React.FC<Props> = ({ todoId, removeTodo }) => {
  const { todo, editItemText, toggleItemCompletion } = useTodo(todoId);

  return (
    <div>
      <input type="text" value={todo.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggleItemCompletion}
      />
      <button
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        X
      </button>
    </div>
  );
};
