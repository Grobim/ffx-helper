import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

import type { MappedMonster } from "..";
import { addPending, triggerResetCapture } from "..";

import useStyles from "./MonsterCard.styles";

interface MonsterCardProps {
  monster: MappedMonster;
}

function MonsterCard({
  monster: {
    key,
    name,
    monsterArena,
    imgUrl,
    species,
    capturedCount,
    pendingCaptureCount,
  },
}: MonsterCardProps) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleOpenDialog() {
    setIsDialogOpen(true);
  }

  function handleCloseDialog() {
    setIsDialogOpen(false);
  }

  function handleSave() {
    dispatch(triggerResetCapture(key));
    setIsDialogOpen(false);
  }

  function handlePlusOneClick() {
    dispatch(addPending(key));
  }

  return (
    <LazyLoad height={334} throttle={100} offset={500}>
      <Fade in>
        <Card>
          <CardActionArea
            onClick={handlePlusOneClick}
            disabled={capturedCount + pendingCaptureCount >= 10}
          >
            <CardHeader
              title={name}
              titleTypographyProps={{ className: classes.title }}
              subheader={species}
              subheaderTypographyProps={{ variant: "caption" }}
              className={classes.header}
            />
            <CardMedia title={key} image={imgUrl} className={classes.media} />
            <CardContent className={classes.content}>
              <Typography
                variant="caption"
                color="textSecondary"
                component="div"
                className={classes.label}
                gutterBottom
              >
                <span>{monsterArena}</span>
              </Typography>
              <Typography
                variant="body1"
                className={classes.label}
                component="div"
              >
                <span
                  className={clsx({
                    [classes.capturedLabelSuccess]: capturedCount >= 10,
                  })}
                >
                  Captured:&nbsp;{capturedCount}
                </span>
                {pendingCaptureCount > 0 && (
                  <>
                    <div className={classes.labelSeparator} />
                    <span className={classes.pendingLabel}>
                      (Pending:&nbsp;{pendingCaptureCount})
                    </span>
                  </>
                )}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <IconButton
              disabled={!capturedCount}
              size="small"
              color="secondary"
              onClick={handleOpenDialog}
              className={classes.firstRightAction}
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Fade>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        aria-describedby="reset-captures-dialog-description"
        PaperProps={{ className: classes.dialog }}
      >
        <DialogContent id="reset-captures-dialog-description">
          <DialogContentText>Reset captures ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="secondary"
            autoFocus
          >
            Reset
          </Button>
        </DialogActions>
      </Dialog>
    </LazyLoad>
  );
}

export default MonsterCard;
