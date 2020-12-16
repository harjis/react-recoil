import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

import { todoListFilterState } from "../../atoms";

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
