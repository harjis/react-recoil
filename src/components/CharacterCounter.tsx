import React from "react";

import { TextInput } from "./TextInput";
import { CharacterCount } from "./CharacterCount";

export const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
