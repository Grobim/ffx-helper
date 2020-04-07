import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(2, 2, 0),
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: "94%",
  },
  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },
  media: {
    height: 170,
    margin: theme.spacing(1),
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
