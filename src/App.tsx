import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { Link } from "react-router-dom";

import { SimpleAuthPanel } from "./features/auth/SimpleAuthPanel";

import { MainRoutes } from "./app/routes";

import "typeface-roboto";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <SimpleAuthPanel />
        <Link to="/users">Users</Link>
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
