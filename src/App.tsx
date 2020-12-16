import React from "react";
import { RecoilRoot } from "recoil";

import { TodoList } from "./features/Todos";

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
