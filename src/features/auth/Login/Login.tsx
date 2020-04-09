import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";

import { useAuth } from "../hooks";
import { useLocation, useHistory } from "react-router-dom";

interface LoginLocationState {
  from: { pathname: string };
}

function Login() {
  const location = useLocation<LoginLocationState>();
  const history = useHistory();
  const firebase = useFirebase();

  const auth = useAuth();

  const { from } = location.state || { from: { pathname: "/" } };

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" }).then(
      () => {
        history.replace(from);
      },
      (error) => {
        console.log("KO", error);
      }
    );
  }

  return (
    <div className="Login">
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {!isLoaded(auth) ? (
        <Typography variant="body1">Loading...</Typography>
      ) : isEmpty(auth) ? (
        <Button color="primary" variant="contained" onClick={loginWithGoogle}>
          Login With Google
        </Button>
      ) : (
        <Button onClick={() => firebase.logout()}>Logout</Button>
      )}
    </div>
  );
}

export default Login;
