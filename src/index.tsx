import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { rffProps, store } from "./app/redux/store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
