import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";
import {
  areaSpecialMonsters,
  speciesSpecialMonsters,
  SpecialSpecies,
} from "../../models";

import { selectUserId } from "../auth";

const selectMonsters = (state: RootState) => state.capture.monsters;
const selectAreaSpecialMonsters = (state: RootState) =>
  state.capture.areaSpecialMonsters;
const selectSpeciesSpecialMonsters = (state: RootState) =>
  state.capture.speciesSpecialMonsters;
const selectTextFilter = (state: RootState) => state.capture.textFilter;
const selectLocationFilter = (state: RootState) => state.capture.locationFilter;
const selectSpeciesFilter = (state: RootState) => state.capture.speciesFilter;
const selectAreaMonsterFilter = (state: RootState) =>
  state.capture.areaMonsterFilter;
const selectSpeciesMonsterFilter = (state: RootState) =>
  state.capture.speciesMonsterFilter;

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
  [
    selectMonsters,
    selectTextFilter,
    selectLocationFilter,
    selectSpeciesFilter,
    selectAreaMonsterFilter,
    selectSpeciesMonsterFilter,
  ],
  (
    monsters,
    textFilter,
    locationFilter,
    speciesFilter,
    areaMonsterFilter,
    speciesMonsterFilter
  ) =>
    monsters.filter((monster) => {
      const lowercasedTextFilter = textFilter.toLowerCase();
      const monsterSpecialSpecies =
        speciesSpecialMonsters[(monster.species as unknown) as SpecialSpecies];

      return (
        (!locationFilter || monster.location === locationFilter) &&
        (!speciesFilter || monster.species === speciesFilter) &&
        (!areaMonsterFilter ||
          areaSpecialMonsters[monster.location].key === areaMonsterFilter) &&
        (!speciesMonsterFilter ||
          (monsterSpecialSpecies &&
            monsterSpecialSpecies.key === speciesMonsterFilter)) &&
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

const selectCheckedAreaSpecialMonsters = createSelector(
  [selectAreaSpecialMonsters, selectUserCaptureMap],
  (areaSpecialMonsters, userCaptureMap) =>
    areaSpecialMonsters.map((areaSpecialMonster) => ({
      ...areaSpecialMonster,
      isUnlocked: areaSpecialMonster.monsterList.every((monsterKey) =>
        Boolean(userCaptureMap && userCaptureMap[monsterKey])
      ),
    }))
);

const selectCheckedSpeciesSpecialMonsters = createSelector(
  [selectSpeciesSpecialMonsters, selectUserCaptureMap],
  (speciesSpecialMonsters, userCaptureMap) =>
    speciesSpecialMonsters.map((speciesSpecialMonster) => ({
      ...speciesSpecialMonster,
      isUnlocked: speciesSpecialMonster.monsterList.every((monsterKey) => {
        const captureCount = userCaptureMap && userCaptureMap[monsterKey];

        return Boolean(
          captureCount && captureCount >= speciesSpecialMonster.requiredCaptures
        );
      }),
    }))
);

export {
  selectMonsters,
  selectTextFilter,
  selectLocationFilter,
  selectSpeciesFilter,
  selectAreaMonsterFilter,
  selectSpeciesMonsterFilter,
  selectAnyPending,
  selectUserCaptureMap,
  selectFilteredCapturedMonsters,
  selectCheckedAreaSpecialMonsters,
  selectCheckedSpeciesSpecialMonsters,
};
