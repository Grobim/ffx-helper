import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";

import { selectUserId } from "../auth";

const selectMonsters = (state: RootState) => state.capture.monsters;
const selectTextFilter = (state: RootState) => state.capture.textFilter;

const selectAnyPending = createSelector(
  [selectMonsters],
  (monsters) =>
    monsters.reduce((prev, cur) => prev + cur.pendingCaptureCount, 0) > 0
);

const selectUserCaptureMap = createSelector(
  [selectUserId, getSelectFirestoreDataOrOrdered()],
  (uid, firestoreData) => firestoreData.captures && firestoreData.captures[uid]
);

const selectFilteredMonsters = createSelector(
  [selectMonsters, selectTextFilter],
  (monsters, textFilter) =>
    monsters.filter((monster) => {
      const lowercasedTextFilter = textFilter.toLowerCase();

      return (
        monster.key.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
        monster.name.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
        monster.location.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
        monster.species.toLowerCase().indexOf(lowercasedTextFilter) >= 0
      );
    })
);

const getCapturedMonstersSelector = (monstersSelector: typeof selectMonsters) =>
  createSelector(
    [monstersSelector, selectUserCaptureMap],
    (monsters, userCaptureMap) =>
      userCaptureMap
        ? monsters.map((monster) => ({
            ...monster,
            capturedCount: userCaptureMap[monster.key] || 0,
          }))
        : monsters
  );

const selectCapturedMonsters = getCapturedMonstersSelector(selectMonsters);

const selectFilteredCapturedMonsters = getCapturedMonstersSelector(
  selectFilteredMonsters
);

export {
  selectMonsters,
  selectTextFilter,
  selectAnyPending,
  selectUserCaptureMap,
  selectCapturedMonsters,
  selectFilteredCapturedMonsters,
};
