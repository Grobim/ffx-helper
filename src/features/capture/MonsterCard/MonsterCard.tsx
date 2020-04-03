import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";

import { MappedMonster } from "../types";

import { useStyles } from "./MonsterCard.styles";
import { addPending } from "..";

interface MonsterCardProps extends MappedMonster {}

function MonsterCard({
  name,
  location,
  imgUrl,
  type,
  capturedCount,
  pendingCaptureCount,
}: MonsterCardProps) {
  const dispatch = useDispatch();
  const styles = useStyles();

  function onPlusOneClick() {
    dispatch(addPending(name));
  }

  return (
    <Card>
      <CardActionArea
        onClick={onPlusOneClick}
        disabled={capturedCount + pendingCaptureCount >= 10}
      >
        <CardMedia className={styles.media} image={imgUrl} title={name} />
        <CardContent>
          <Typography variant="h5" noWrap>
            {name}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {location}
            <br />
            {type}
          </Typography>
          <Typography
            variant="body1"
            className={classNames({
              [styles.capturedLabelSuccess]: capturedCount >= 10,
            })}
          >
            Captured:&nbsp;{capturedCount}
            {pendingCaptureCount > 0 && (
              <span className={styles.pendingLabel}>
                {" "}
                (Pending:&nbsp;{pendingCaptureCount})
              </span>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MonsterCard;
