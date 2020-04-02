import Button from "@material-ui/core/Button";
import MatDrawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import React, { MouseEventHandler, ReactChild } from "react";
import { Link } from "react-router-dom";

import { useStyles } from "./Layout.styles";

interface DrawerProps {
  mobileOpen: boolean;
  onMenuClose: MouseEventHandler;
}

interface NavListItem extends Record<string, any> {
  to: string;
  children: ReactChild;
  className: string;
}

function Drawer({ mobileOpen, onMenuClose }: DrawerProps) {
  const styles = useStyles();

  function NavListItem({ children, className, ...props }: NavListItem) {
    return (
      <Button
        className={`${className} ${styles.navItem}`}
        component={Link}
        onClick={onMenuClose}
        {...props}
      >
        {children}
      </Button>
    );
  }

  const drawer = (
    <div>
      <div className={styles.toolbar} />
      <List component="div">
        <ListItem component={NavListItem} to="/users">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className={styles.drawer}>
      <Hidden smUp>
        <MatDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMenuClose}
          classes={{
            paper: styles.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </MatDrawer>
      </Hidden>
      <Hidden xsDown>
        <MatDrawer
          classes={{
            paper: styles.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </MatDrawer>
      </Hidden>
    </nav>
  );
}

export default Drawer;
