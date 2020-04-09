import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import { store } from "../redux/store";

import Layout from ".";

test("renders Header", () => {
  const { getByText } = render(
    <StaticRouter location="/">
      <Provider store={store}>
        <Layout>{"Toto"}</Layout>
      </Provider>
    </StaticRouter>
  );

  expect(getByText(/FFX Helpers/i)).toBeInTheDocument();
});
