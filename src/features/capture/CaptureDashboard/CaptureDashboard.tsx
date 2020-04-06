import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "react-redux-firebase";

import { useAuth } from "../../auth";

import {
  resetPendings,
  triggerSaveCapture,
  useAnyPending,
  useSyncedFilteredCapturedMonsters,
} from "..";
import MonsterCard from "../MonsterCard";
import MonsterFilters from "../MonsterFilters";

import useStyles from "./CaptureDashboard.styles";

function CaptureDashboard() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const auth = useAuth();

  const monsters = useSyncedFilteredCapturedMonsters();
  const hasAnyPending = useAnyPending();

  function reset() {
    dispatch(resetPendings());
  }

  function save() {
    dispatch(triggerSaveCapture(monsters));
  }

  return (
    <div className="CaptureDashboard">
      <div className={styles.header}>
        <Typography className={styles.title} variant="h4" noWrap>
          Capture
        </Typography>
        <Button
          className={styles.button}
          variant="contained"
          color="secondary"
          onClick={reset}
          disabled={!hasAnyPending}
        >
          Reset Pendings
        </Button>
      </div>
      <Grid container spacing={1}>
        <Grid xs={12} item>
          <MonsterFilters />
        </Grid>
        {monsters.map(({ key, ...monster }) => (
          <Grid key={key} item xs={6} sm={4} lg={3}>
            <MonsterCard monsterKey={key} {...monster} />
          </Grid>
        ))}
      </Grid>
      <Zoom in={hasAnyPending && !isEmpty(auth)}>
        <Fab className={styles.fab} color="primary" onClick={save}>
          <SaveIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default CaptureDashboard;
