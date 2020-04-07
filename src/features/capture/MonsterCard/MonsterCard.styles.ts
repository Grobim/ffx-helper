import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 170,
    margin: theme.spacing(1, 1, 0),
    backgroundSize: "contain",
  },
  content: {
    padding: theme.spacing(2, 2, 0),
  },
  label: {
    display: "flex",
    flexWrap: "wrap",
  },
  labelSeparator: {
    flex: 1,
  },
  capturedLabelSuccess: {
    color: theme.palette.success.main,
  },
  pendingLabel: {
    color: theme.palette.warning.main,
  },
  firstRightAction: {
    marginLeft: "auto",
  },
  dialog: {
    width: 400,
  },
}));

export default useStyles;
