import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { forceCheck } from "react-lazyload";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import SaveIcon from "@material-ui/icons/Save";

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
  const classes = useStyles();

  const auth = useAuth();

  const monsters = useSyncedFilteredCapturedMonsters();
  const hasAnyPending = useAnyPending();

  useEffect(forceCheck, [monsters]);

  function reset() {
    dispatch(resetPendings());
  }

  function save() {
    dispatch(triggerSaveCapture(monsters));
  }

  return (
    <div className="CaptureDashboard">
      <div className={classes.header}>
        <Typography className={classes.title} variant="h4" noWrap gutterBottom>
          Capture
        </Typography>
        <Button
          className={classes.button}
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
        {monsters.map((monster) => (
          <Grid key={monster.key} item xs={6} sm={4} lg={3}>
            <MonsterCard monster={monster} />
          </Grid>
        ))}
      </Grid>
      <Zoom in={hasAnyPending && !isEmpty(auth)}>
        <Fab className={classes.fab} color="primary" onClick={save}>
          <SaveIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default CaptureDashboard;
