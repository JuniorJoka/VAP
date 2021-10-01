/*
|----------------------------------------------------------------------------------------
|React and Router
|----------------------------------------------------------------------------------------
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";

/*
|----------------------------------------------------------------------------------------
|Render the app
|----------------------------------------------------------------------------------------
*/

ReactDOM.render(
  <Provider store={store}></Provider>,
  document.getElementById("app")
);
