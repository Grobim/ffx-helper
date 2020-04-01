import React from "react";
import { isLoaded, isEmpty, useFirebase } from "react-redux-firebase";
import { useAuth } from "./hooks";

function SimpleAuthPanel() {
  const firebase = useFirebase();

  const auth = useAuth();

  function loginWithGoogle() {
    return firebase.login({ provider: "google", type: "popup" });
  }

  function logout() {
    return firebase.logout();
  }

  return (
    <div>
      <h2>Auth</h2>
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        // <GoogleButton/> button can be used instead
        <button onClick={loginWithGoogle}>Login With Google</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}

export { SimpleAuthPanel };
