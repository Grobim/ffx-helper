import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch } from "react-redux";

import { useAnyPending, useMonsters } from "../hooks";

import { resetPendings, savePendings } from "..";
import MonsterCard from "../MonsterCard";

import { useStyles } from "./CaptureDashboard.styles";

function CaptureDashboard() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const monsters = useMonsters();
  const hasAnyPending = useAnyPending();

  function reset() {
    dispatch(resetPendings());
  }

  function save() {
    dispatch(savePendings());
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
      <Grid container spacing={2}>
        {monsters.map((monster) => (
          <Grid key={monster.name} item xs={6} sm={4} lg={3}>
            <MonsterCard {...monster} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CaptureDashboard;
