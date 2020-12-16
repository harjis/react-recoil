import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";

import { TodoList } from "./features/Todos";
import { Loading } from "./components/Loading";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
