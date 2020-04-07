import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "94%",
  },
  media: {
    height: 170,
    margin: theme.spacing(1, 1, 0),
    backgroundSize: "contain",
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
