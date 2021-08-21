import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Celebrities from "./Celebrities";
import Login from './Login';
import ChangeEmail from './ChangeEmail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/celebrities">
        <Celebrities />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/changeEmail">
        <ChangeEmail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}