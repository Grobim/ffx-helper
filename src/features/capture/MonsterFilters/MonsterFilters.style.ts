import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    boxSizing: "initial",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: theme.typography.h5.fontSize,
  },
  searchIcon: {
    fontSize: 30,
    padding: theme.spacing(0, 1),
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
