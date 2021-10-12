import * as React from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";

import { Toast } from "../../../shared/types/vap";
import { ToastItem } from "../../elements/ToastItem";
import { RootState } from "../../store/reducers";

import { ToastMenu } from "./ToastsStyle";

interface InjectedProps {
  toasts: Toast[];
}

const Toasts: React.FC<InjectedProps> = ({ toasts }) => {
  return createPortal(
    <ToastMenu>
      {toasts.map((toast) => (
        <ToastItem key={toast._id} toast={toast}></ToastItem>
      ))}
    </ToastMenu>,
    document.getElementById("toast")
  );
};

const mapStateToProps = (state: RootState) => {
  return { toasts: state.toasts };
};

export default connect(mapStateToProps)(Toasts);
