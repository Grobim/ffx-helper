import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../../features/auth/Login";
import CaptureDashboard from "../../features/capture/CaptureDashboard";
import { Home } from "../../features/home/Home";
import { UserList } from "../../features/users/UserList";

import PrivateRoute from "./PrivateRoute";

function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path="/users">
        <UserList />
      </PrivateRoute>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/capture">
        <CaptureDashboard />
      </Route>
      <Route path="*">
        <div>404 mamène</div>
      </Route>
    </Switch>
  );
}

export default MainRoutes;
