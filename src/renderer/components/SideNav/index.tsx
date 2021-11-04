import * as React from "react";
import { Logo, Section, Tab, Wrapper } from "./SideNavStyle";

export const SideNav = () => {
  return (
    <Wrapper>
      <Logo />
      <Section>
        {[...Array(5)].map((_, idx) => (
          <Tab key={idx} />
        ))}
      </Section>
    </Wrapper>
  );
};
