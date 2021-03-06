import React, { ElementType } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import { rffProps, store } from "./app/redux/store";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const render = (Comp: ElementType) => {
  return ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rffProps}>
          <Comp />
        </ReactReduxFirebaseProvider>
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./app/App", () => {
    const NextApp = require("./app/App").default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
