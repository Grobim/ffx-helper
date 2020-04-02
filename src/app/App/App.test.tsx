import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import { store } from "../redux/store";

import App from "./App";

test("renders Header", () => {
  const { getByText } = render(
    <StaticRouter location="/">
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  expect(getByText(/FFX Helpers/i)).toBeInTheDocument();
});
