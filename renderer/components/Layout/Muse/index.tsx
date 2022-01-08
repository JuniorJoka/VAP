import { ReactNode } from "react";

import { Content } from "../../Muse/Content";
import { ControlArea } from "../../Muse/ControlArea";
import { SideNavigation } from "../../SideNavigation";

import { Wrapper } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <SideNavigation />
      <ControlArea />
      <Content>{children}</Content>
    </Wrapper>
  );
};
