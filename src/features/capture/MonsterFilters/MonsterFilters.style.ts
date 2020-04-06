import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    boxSizing: "initial",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
  },
  search: {
    fontSize: 30,
    padding: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
  },
  hasFilter: {
    color: theme.palette.warning.main,
  },
  input: {
    flex: 1,
    fontSize: theme.typography.h5.fontSize,
  },
  divider: {
    height: 32,
    margin: theme.spacing(0, 1),
  },
  expand: {
    margin: theme.spacing(-1 / 2),
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));

export default useStyles;
