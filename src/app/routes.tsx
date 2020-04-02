import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../features/auth/Login";
import { Home } from "../features/home/Home";
import { UserList } from "../features/users/UserList";

function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users">
        <UserList />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route>
        <div>404 mamène</div>
      </Route>
    </Switch>
  );
}

export { MainRoutes };
