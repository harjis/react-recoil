import React from "react";
import { useRecoilValue } from "recoil";

import { charCountState } from "../selectors/chartCountSelector";

export const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
};
