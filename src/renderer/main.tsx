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
|React and Router
|----------------------------------------------------------------------------------------
*/

import GlobalStyle from "./styles/globalStyle";

/*
|----------------------------------------------------------------------------------------
|Render the app
|----------------------------------------------------------------------------------------
*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
