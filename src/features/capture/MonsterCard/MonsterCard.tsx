import React, { useState } from "react";
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
    location,
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
    <>
      <Card>
        <CardHeader
          title={name}
          subheader={species}
          subheaderTypographyProps={{ variant: "caption" }}
        />
        <CardActionArea
          onClick={handlePlusOneClick}
          disabled={capturedCount + pendingCaptureCount >= 10}
        >
          <CardMedia title={key} image={imgUrl} className={classes.media} />
          <CardContent className={classes.content}>
            <Typography
              variant="caption"
              color="textSecondary"
              component="div"
              className={classes.label}
              gutterBottom
            >
              <span>{location}</span>
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
            color="secondary"
            onClick={handleOpenDialog}
            className={classes.firstRightAction}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
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
    </>
  );
}

export default MonsterCard;
