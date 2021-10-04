import { ToastActions } from "./action-types";

export interface Action {
  type: string;
  payload: any;
}

export interface ToastsAction extends Action {
  type: ToastActions;
  payload: Toast;
}

export interface Toast {
  _id: number;
  title: string;
  content: string;
}
