import * as React from "react";

import { Wrapper } from "./AppStyle";
import Toasts from "./components/Toasts";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main/";

/*
|----------------------------------------------------------------------------------------
|The App
|----------------------------------------------------------------------------------------
*/

export const Vap: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Footer />
      {/* <Toasts /> */}
      {/* SubTitle Menu goes here */}
      {/* Player Aux goes here */}
    </Wrapper>
  );
};
