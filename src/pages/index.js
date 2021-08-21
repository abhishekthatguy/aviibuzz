import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Celebrities from "./Celebrities";
import Login from './Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/celebrities">
        <Celebrities />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}