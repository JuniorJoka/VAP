import * as React from "react";

import { Wrapper } from "./AppStyle";
import Toasts from "./components/Toasts";

/*
|----------------------------------------------------------------------------------------
|The App
|----------------------------------------------------------------------------------------
*/

export const Vap: React.FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
      {/* Footer Goes Here */}
      <Toasts />
      {/* SubTitle Menu goes here */}
      {/* Player Aux goes here */}
    </Wrapper>
  );
};
