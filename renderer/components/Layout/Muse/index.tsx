import { ReactNode } from "react";

import { Content } from "../../Muse/Content";
import { ControlArea } from "../../Muse/ControlArea";
import { Head } from "../../Muse/Head";
import { SideNavigation } from "../../SideNavigation";

import { Wrapper } from "./styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Wrapper>
      <SideNavigation />
      <ControlArea />
      <Head />
      <Content>{children}</Content>
    </Wrapper>
  );
};
