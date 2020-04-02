import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MaterialToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { MouseEventHandler, ReactChild } from "react";
import { Link } from "react-router-dom";

import { getUseStyles } from "./Layout.styles";

interface ToolbarProps {
  onMenuClick: MouseEventHandler;
}

interface ToolbarLinkProps extends Record<string, any> {
  to: string;
  children: ReactChild;
  className: string;
}

const useStyles = getUseStyles();

function Toolbar({ onMenuClick }: ToolbarProps) {
  const styles = useStyles();

  function ToolbarLink({ children, className, ...props }: ToolbarLinkProps) {
    return (
      <Link className={`${className} ${styles.navToolbar}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <MaterialToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap to="/" component={ToolbarLink}>
          FFX Helpers
        </Typography>
      </MaterialToolbar>
    </AppBar>
  );
}

export default Toolbar;
