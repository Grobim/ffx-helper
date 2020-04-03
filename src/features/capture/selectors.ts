import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";

import { selectUserId } from "../auth";

const selectMonsters = (state: RootState) => state.capture.monsters;

const selectAnyPending = createSelector(
  [selectMonsters],
  (monsters) =>
    monsters.reduce((prev, cur) => prev + cur.pendingCaptureCount, 0) > 0
);

const selectUserCaptureMap = createSelector(
  [selectUserId, getSelectFirestoreDataOrOrdered()],
  (uid, firestoreData) => firestoreData.captures && firestoreData.captures[uid]
);

const selectCapturedMonsters = createSelector(
  [selectMonsters, selectUserCaptureMap],
  (monsters, userCaptureMap) =>
    userCaptureMap
      ? monsters.map((monster) => ({
          ...monster,
          capturedCount: userCaptureMap[monster.key] || 0,
        }))
      : monsters
);

export {
  selectMonsters,
  selectAnyPending,
  selectUserCaptureMap,
  selectCapturedMonsters,
};
