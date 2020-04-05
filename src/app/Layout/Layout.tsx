import React, { ReactChild, useState } from "react";

import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

import useStyles from "./Layout.styles";

interface LayoutProps {
  children: ReactChild;
}

function Layout({ children }: LayoutProps) {
  const styles = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDrawerClose() {
    setMobileOpen(false);
  }

  return (
    <div className={styles.root}>
      <Toolbar onMenuClick={handleDrawerToggle} />
      <Drawer mobileOpen={mobileOpen} onMenuClose={handleDrawerClose} />
      <main className={styles.main}>
        <div className={styles.toolbar} />
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
