import * as React from "react";

import { Toast as ToastType } from "../../shared/types/vap";
import { Content, Title, Toast } from "./ToastStyle";

interface Props {
  toast: ToastType;
}

export const ToastItem: React.FC<Props> = ({ toast: { title, content } }) => {
  return (
    <Toast>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Toast>
  );
};
