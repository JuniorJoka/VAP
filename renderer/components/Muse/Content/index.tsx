import { ReactNode } from "react";
import { Wrapper } from "./styles";

export const Content = ({ children }: { children: ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};
