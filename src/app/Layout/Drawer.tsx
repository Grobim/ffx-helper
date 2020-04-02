import MatDrawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import React, { MouseEventHandler } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";

import { useStyles } from "./Layout.styles";

interface DrawerProps {
  mobileOpen: boolean;
  onMenuClose: MouseEventHandler;
  onMenuItemClick: (path: string) => void;
}

function Drawer({ mobileOpen, onMenuClose, onMenuItemClick }: DrawerProps) {
  const styles = useStyles();

  const drawer = (
    <div>
      <div className={styles.toolbar} />
      <List>
        <ListItem button onClick={() => onMenuItemClick("/users")}>
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
