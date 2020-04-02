import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const getUseStyles = () =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
      },
      drawer: {
        [theme.breakpoints.up("sm")]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      main: {
        flexGrow: 1,
      },
      content: {
        padding: theme.spacing(3),
      },
      navItem: {
        textTransform: "initial",
      },
      navToolbar: {
        color: "inherit",
        textDecoration: "none",
        flexGrow: 1,
      },
    })
  );

const useStyles = getUseStyles();

export { getUseStyles, useStyles };
