import Button from "@material-ui/core/Button";
import MaterialDrawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import PetsIcon from "@material-ui/icons/Pets";
import clsx from "clsx";
import React, {
  ElementRef,
  forwardRef,
  MouseEventHandler,
  ReactChild,
} from "react";
import { Link } from "react-router-dom";

import useStyles from "./Layout.styles";

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

  function NavListItem(
    { children, className, ...props }: NavListItem,
    ref: ElementRef<any>
  ) {
    return (
      <Button
        className={clsx(className, styles.navItem)}
        component={Link}
        onClick={onMenuClose}
        ref={ref}
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
        <ListItem component={forwardRef(NavListItem)} to="/capture">
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary="Capture" />
        </ListItem>
        <ListItem component={forwardRef(NavListItem)} to="/users">
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
      <Hidden mdUp>
        <MaterialDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMenuClose}
          classes={{
            paper: styles.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          role="navigation"
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
      <Hidden smDown>
        <MaterialDrawer
          open
          classes={{
            paper: styles.drawerPaper,
          }}
          variant="permanent"
          role="navigation"
        >
          {drawer}
        </MaterialDrawer>
      </Hidden>
    </nav>
  );
}

export default Drawer;
