import * as React from "react";

import { Header, SubHead, SubHeadNavigation, Wrapper } from "./ContentStyle";

export const Content = () => {
  return (
    <Wrapper>
      <Header />
      <SubHead>
        <SubHeadNavigation />
      </SubHead>
    </Wrapper>
  );
};
