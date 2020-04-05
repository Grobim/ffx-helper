import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import Layout from "../Layout";
import { MainRoutes } from "../routes";

import "typeface-roboto";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <MainRoutes />
      </Layout>
    </>
  );
}

export default App;
