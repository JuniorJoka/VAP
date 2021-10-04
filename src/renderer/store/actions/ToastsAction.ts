import { ToastActions } from "../../../shared/types/action-types";
import store from "../store";

// Remove toast before timeout
export const remove = (_id: number): void => {
  store.dispatch({
    type: ToastActions.TOAST_REMOVE,
    payload: { _id, title: "", content: "" },
  });
};

// Add a toast
export const add = (title: string, content: string, duration: number = 3000): void => {
  const _id = Date.now();
  const toast = { _id, title, content };

  store.dispatch({
    type: ToastActions.TOAST_ADD,
    payload: toast,
  });

  window.setTimeout(() => {
    remove(_id);
  }, duration);
};
