import { createStore, Store } from "redux";

import { rootReducer, RootState } from "./reducers";

const store: Store<RootState> = createStore(rootReducer);

export default store;
