import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 170,
    margin: theme.spacing(1, 1, 0),
    backgroundSize: "contain",
  },
  capturedLabel: {
    display: "flex",
  },
  capturedLabelSuccess: {
    color: theme.palette.success.main,
  },
  capturedLabelSeparator: {
    flex: 1,
  },
  pendingLabel: {
    color: theme.palette.warning.main,
  },
}));

export default useStyles;
