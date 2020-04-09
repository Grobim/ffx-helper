import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  otherFilters: {
    marginTop: theme.spacing(2),
  },
  selectItemSuccess: {
    color: theme.palette.success.main,
  },
  subLocationItem: {
    paddingLeft: theme.spacing(3),
  },
  selectOptionLabel: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  capturedFilterContainer: {
    minHeight: 56,
    display: "flex",
    padding: theme.spacing(0, 1),
  },
}));

export default useStyles;
