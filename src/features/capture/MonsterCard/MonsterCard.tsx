import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";

import type { MappedMonster } from "..";
import { addPending } from "..";

import useStyles from "./MonsterCard.styles";

interface MonsterCardProps extends Omit<MappedMonster, "key"> {
  monsterKey: MappedMonster["key"];
}

function MonsterCard({
  monsterKey,
  name,
  location,
  imgUrl,
  species,
  capturedCount,
  pendingCaptureCount,
}: MonsterCardProps) {
  const dispatch = useDispatch();
  const styles = useStyles();

  function onPlusOneClick() {
    dispatch(addPending(monsterKey));
  }

  return (
    <Card>
      <CardActionArea
        onClick={onPlusOneClick}
        disabled={capturedCount + pendingCaptureCount >= 10}
      >
        <CardMedia className={styles.media} image={imgUrl} title={monsterKey} />
        <CardContent>
          <Typography variant="h5" noWrap gutterBottom>
            {name}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            component="div"
            className={styles.label}
            gutterBottom
          >
            <span>{location}</span>
            <div className={styles.labelSeparator} />
            <span>{species}</span>
          </Typography>
          <Typography variant="body1" className={styles.label} component="div">
            <span
              className={clsx({
                [styles.capturedLabelSuccess]: capturedCount >= 10,
              })}
            >
              Captured:&nbsp;{capturedCount}
            </span>
            {pendingCaptureCount > 0 && (
              <>
                <div className={styles.labelSeparator} />
                <span className={styles.pendingLabel}>
                  (Pending:&nbsp;{pendingCaptureCount})
                </span>
              </>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MonsterCard;
