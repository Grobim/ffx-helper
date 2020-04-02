import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";

import { useAuth } from "../hooks";

function Login() {
  const firebase = useFirebase();

  const auth = useAuth();

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  return (
    <div>
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
        // <Redirect to="/" />
        <Button onClick={() => firebase.logout()}>Logout</Button>
      )}
    </div>
  );
}

export default Login;
