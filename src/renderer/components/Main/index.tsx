import * as React from "react";

import { Content } from "../Content";
import { SideNav } from "../SideNav";
import { Wrapper } from "./MainStyle";

export const Main = ({ children }) => {
  return (
    <Wrapper>
      <SideNav></SideNav>
      <Content></Content>
      {children}
    </Wrapper>
  );
};
