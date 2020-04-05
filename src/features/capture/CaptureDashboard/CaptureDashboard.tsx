import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch } from "react-redux";

import {
  resetPendings,
  triggerSaveCapture,
  useAnyPending,
  useSyncedCapturedMonsters,
} from "..";
import MonsterCard from "../MonsterCard";
import MonsterFilters from "../MonsterFilters";

import useStyles from "./CaptureDashboard.styles";

function CaptureDashboard() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const monsters = useSyncedCapturedMonsters();
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
        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          onClick={save}
          disabled={!hasAnyPending}
        >
          Save Pendings
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
    </div>
  );
}

export default CaptureDashboard;
