import * as React from "react";

import Toasts from "./components/Toasts/Toasts";

/*
|----------------------------------------------------------------------------------------
|The App
|----------------------------------------------------------------------------------------
*/

export const Vap: React.FC = ({ children }) => {
  return (
    <>
      {children}
      {/* Footer Goes Here */}
      <Toasts />
      {/* SubTitle Menu goes here */}
      {/* Player Aux goes here */}
    </>
  );
};
