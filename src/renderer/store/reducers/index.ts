import { combineReducers } from "redux";
import { toasts } from "./toasts";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  toasts,
});
