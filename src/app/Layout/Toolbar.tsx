import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MatToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { MouseEventHandler, ReactChild } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./Layout.styles";

interface ToolbarProps {
  onMenuClick: MouseEventHandler;
}

interface ToolbarLinkProps extends Record<string, any> {
  to: string;
  children: ReactChild;
  className: string;
}

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
      <MatToolbar>
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
      </MatToolbar>
    </AppBar>
  );
}

export default Toolbar;
