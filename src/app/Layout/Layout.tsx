import React, { ReactChild, useState } from "react";

import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

import useStyles from "./Layout.styles";

interface LayoutProps {
  children: ReactChild;
}

function Layout({ children }: LayoutProps) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDrawerClose() {
    setMobileOpen(false);
  }

  return (
    <div className={classes.root}>
      <Toolbar onMenuClick={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} onMenuClose={handleDrawerClose} />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <div className={classes.content}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
