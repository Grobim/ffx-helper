import React from "react";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "../../features/auth";

function PrivateRoute({ children, ...props }: RouteProps) {
  const auth = useAuth();

  if (!isLoaded(auth)) {
    return null;
  }

  return (
    <Route
      {...props}
      render={({ location }) =>
        !isLoaded(auth) ? null : isEmpty(auth) ? (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
}

export default PrivateRoute;
