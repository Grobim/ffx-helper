import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MatToolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import React, { MouseEventHandler } from "react";

import { useStyles } from "./Layout.styles";

interface ToolbarProps {
  onMenuClick: MouseEventHandler;
}

function Toolbar({ onMenuClick }: ToolbarProps) {
  const styles = useStyles();

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
        <Typography variant="h6" noWrap>
          FFX Helpers
        </Typography>
      </MatToolbar>
    </AppBar>
  );
}

export default Toolbar;
