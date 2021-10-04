import { ToastActions } from "../../../shared/types/action-types";
import { Toast, ToastsAction } from "../../../shared/types/vap";

type ToastState = Toast[];
const initialState: ToastState = [];

export const toasts = (state = initialState, action: ToastsAction): ToastState => {
  switch (action.type) {
    case ToastActions.TOAST_ADD: {
      const toasts = [...state, action.payload];
      return toasts;
    }

    case ToastActions.TOAST_REMOVE: {
      const toasts = state.filter((toast) => toast._id !== action.payload._id);
      return toasts;
    }

    default: {
      return state;
    }
  }
};
