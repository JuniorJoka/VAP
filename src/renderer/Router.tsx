import * as React from "react";
import { BrowserRouter as ReactRouter, Switch } from "react-router-dom";
import { Vap } from "./App";

export const Router: React.FC = () => {
  return (
    <ReactRouter>
      <Vap>
        <Switch></Switch>
      </Vap>
    </ReactRouter>
  );
};
