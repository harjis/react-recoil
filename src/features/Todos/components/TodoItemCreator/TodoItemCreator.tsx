import React, { ChangeEvent, useState } from "react";

type Props = {
  addTodo: (text: string) => void;
};
export const TodoItemCreator: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button
        onClick={() => {
          props.addTodo(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
};
