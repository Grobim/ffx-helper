import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";

import { selectUserId } from "../auth";

const selectMonsters = (state: RootState) => state.capture.monsters;
const selectTextFilter = (state: RootState) => state.capture.textFilter;
const selectLocationFilter = (state: RootState) => state.capture.locationFilter;
const selectSpeciesFilter = (state: RootState) => state.capture.speciesFilter;

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
  [selectMonsters, selectTextFilter, selectLocationFilter, selectSpeciesFilter],
  (monsters, textFilter, locationFilter, speciesFilter) =>
    monsters.filter((monster) => {
      const lowercasedTextFilter = textFilter.toLowerCase();

      return (
        (!locationFilter || monster.location === locationFilter) &&
        (!speciesFilter || monster.species === speciesFilter) &&
        (!textFilter ||
          monster.key.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
          monster.name.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
          monster.location.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
          monster.species.toLowerCase().indexOf(lowercasedTextFilter) >= 0)
      );
    })
);

const selectFilteredCapturedMonsters = createSelector(
  [selectFilteredMonsters, selectUserCaptureMap],
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
  selectTextFilter,
  selectLocationFilter,
  selectSpeciesFilter,
  selectAnyPending,
  selectUserCaptureMap,
  selectFilteredCapturedMonsters,
};
