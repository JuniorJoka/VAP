import { ToastActions } from "./action-types";

export interface Action {
  type: string;
  payLoad: any;
}

export interface ToastsAction extends Action {
  type: ToastActions;
  payLoad: Toast;
}

export interface Toast {
  _id: number;
  title: string;
  content: string;
}
