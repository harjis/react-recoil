import { selector } from "recoil";

import { todoIdsState, todoListFilterState, todoState } from "../atoms";

export const filteredTodoIdsState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todoIds = get(todoIdsState);

    switch (filter) {
      case "Show Completed":
        return todoIds.filter((todoId) => get(todoState(todoId)).isComplete);
      case "Show Uncompleted":
        return todoIds.filter((todoId) => !get(todoState(todoId)).isComplete);
      default:
        return todoIds;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoIds = get(todoIdsState);
    const totalNum = todoIds.length;
    const totalCompletedNum = todoIds.filter(
      (todoId) => get(todoState(todoId)).isComplete
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
