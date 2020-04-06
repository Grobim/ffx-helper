import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MaterialToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React, { MouseEventHandler, ReactChild } from "react";
import { Link } from "react-router-dom";

import useStyles from "./Toolbar.styles";

interface ToolbarProps {
  onMenuClick: MouseEventHandler;
}

interface ToolbarLinkProps extends Record<string, any> {
  to: string;
  children: ReactChild;
  className: string;
}

function Toolbar({ onMenuClick }: ToolbarProps) {
  const classes = useStyles();

  function ToolbarLink({ children, className, ...props }: ToolbarLinkProps) {
    return (
      <Link className={clsx(className, classes.navToolbar)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <MaterialToolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap to="/" component={ToolbarLink}>
          FFX Helpers
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </MaterialToolbar>
    </AppBar>
  );
}

export default Toolbar;
