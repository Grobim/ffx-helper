import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navToolbar: {
    color: "inherit",
    textDecoration: "none",
    flexGrow: 1,
  },
}));

export default useStyles;
