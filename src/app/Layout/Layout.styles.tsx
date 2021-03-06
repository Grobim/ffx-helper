import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  main: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
  },
  navItem: {
    textTransform: "initial",
  },
  activeLink: {
    backgroundColor: theme.palette.action.selected,
  },
}));

export default useStyles;
