import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  otherFilters: {
    marginTop: theme.spacing(2),
  },
  selectItemSuccess: {
    color: theme.palette.success.main,
  },
}));

export default useStyles;
