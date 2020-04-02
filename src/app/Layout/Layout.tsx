import React, { ReactChild, useState } from "react";
import { useHistory } from "react-router-dom";

import { SimpleAuthPanel } from "../../features/auth/SimpleAuthPanel";

import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

import { useStyles } from "./Layout.styles";

interface LayoutProps {
  children: ReactChild;
}

function Layout({ children }: LayoutProps) {
  const history = useHistory();
  const styles = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDrawerItemClick(path: string) {
    history.push(path);
    setMobileOpen(false);
  }

  return (
    <div className={styles.root}>
      <Toolbar onMenuClick={handleDrawerToggle} />
      <Drawer
        mobileOpen={mobileOpen}
        onMenuClose={handleDrawerToggle}
        onMenuItemClick={handleDrawerItemClick}
      />
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <SimpleAuthPanel />
        {children}
      </main>
    </div>
  );
}

export default Layout;
