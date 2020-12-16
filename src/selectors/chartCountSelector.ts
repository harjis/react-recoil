import { selector } from "recoil";

import { textState } from "../atoms/textState";

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
