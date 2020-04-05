import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
