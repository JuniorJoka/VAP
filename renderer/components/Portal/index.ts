import React from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, selector }) => {
  const ref = React.useRef();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};
