import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { useMemo } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useSyncedUserSettings } from "../../features/settings";

import Layout from "../Layout";
import { MainRoutes } from "../routes";

function App() {
  const userSettings = useSyncedUserSettings();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: userSettings.darkMode ? "dark" : "light",
        },
      }),
    [userSettings]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <MainRoutes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
