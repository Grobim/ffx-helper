import React from "react";
import { Route, Switch } from "react-router-dom";

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
    </Switch>
  );
}

export { MainRoutes };
