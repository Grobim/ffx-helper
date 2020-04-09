import { createSelector } from "@reduxjs/toolkit";
import find from "lodash/find";
import intersection from "lodash/intersection";

import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";

import {
  locations,
  monsterAreaMonsters,
  speciesSpecialMonsters,
} from "../../models";
import type {
  Location,
  MainLocation,
  MainLocationKey,
  SpecialSpecies,
} from "../../models";

import { selectUserId } from "../auth";

const selectMonsters = (state: RootState) => state.capture.monsters;
const selectAreaSpecialMonsters = (state: RootState) =>
  state.capture.monsterArenaMonsters;
const selectSpeciesSpecialMonsters = (state: RootState) =>
  state.capture.speciesSpecialMonsters;
const selectTextFilter = (state: RootState) => state.capture.textFilter;
const selectLocationFilter = (state: RootState) => state.capture.locationFilter;
const selectSpeciesFilter = (state: RootState) => state.capture.speciesFilter;
const selectAreaMonsterFilter = (state: RootState) =>
  state.capture.monsterAreaFilter;
const selectSpeciesMonsterFilter = (state: RootState) =>
  state.capture.speciesMonsterFilter;
const selectCapturedFilter = (state: RootState) => state.capture.capturedFilter;

const selectAnyPending = createSelector(
  [selectMonsters],
  (monsters) =>
    monsters.reduce((prev, cur) => prev + cur.pendingCaptureCount, 0) > 0
);

const selectUserCaptureMap = createSelector(
  [selectUserId, getSelectFirestoreDataOrOrdered()],
  (uid, firestoreData) => firestoreData.captures && firestoreData.captures[uid]
);

const filterLocation = (
  monsterLocations: Location[] = [],
  locationFilter?: Location
) => {
  if (!locationFilter) {
    return true;
  }

  let mainLocation: MainLocation | undefined =
    locations[locationFilter as MainLocationKey];

  if (mainLocation) {
    return (
      intersection(monsterLocations, [
        ...(mainLocation.subLocations || []),
        mainLocation.key,
      ]).length > 0
    );
  } else {
    mainLocation = find(locations, (mainLoc) => {
      return (
        !!mainLoc.subLocations &&
        mainLoc.subLocations.indexOf(locationFilter) > -1
      );
    }) as MainLocation;

    return (
      intersection(monsterLocations, [locationFilter, mainLocation.key])
        .length > 0
    );
  }
};

const selectCapturedMonsters = createSelector(
  [selectMonsters, selectUserCaptureMap],
  (monsters, userCaptureMap) =>
    userCaptureMap
      ? monsters.map((monster) => ({
          ...monster,
          capturedCount: userCaptureMap[monster.key] || 0,
        }))
      : monsters.map((monster) => ({
          ...monster,
          capturedCount: 0,
        }))
);

const selectFilteredCapturedMonsters = createSelector(
  [
    selectCapturedMonsters,
    selectTextFilter,
    selectLocationFilter,
    selectSpeciesFilter,
    selectAreaMonsterFilter,
    selectSpeciesMonsterFilter,
    selectCapturedFilter,
  ],
  (
    monsters,
    textFilter,
    locationFilter,
    speciesFilter,
    areaMonsterFilter,
    speciesMonsterFilter,
    capturedFilter
  ) =>
    monsters.filter((monster) => {
      const lowercasedTextFilter = textFilter.toLowerCase();
      const monsterSpecialSpecies =
        speciesSpecialMonsters[(monster.species as unknown) as SpecialSpecies];

      return (
        (!speciesFilter || monster.species === speciesFilter) &&
        (!areaMonsterFilter ||
          monsterAreaMonsters[monster.monsterArena].key ===
            areaMonsterFilter) &&
        (!speciesMonsterFilter ||
          (monsterSpecialSpecies &&
            monsterSpecialSpecies.key === speciesMonsterFilter)) &&
        (!capturedFilter.isActive ||
          monster.capturedCount < capturedFilter.count) &&
        filterLocation(monster.locations, locationFilter) &&
        (!textFilter ||
          monster.key.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
          monster.name.toLowerCase().indexOf(lowercasedTextFilter) >= 0 ||
          monster.monsterArena.toLowerCase().indexOf(lowercasedTextFilter) >=
            0 ||
          monster.species.toLowerCase().indexOf(lowercasedTextFilter) >= 0)
      );
    })
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
  selectAreaSpecialMonsters,
  selectSpeciesSpecialMonsters,
  selectTextFilter,
  selectLocationFilter,
  selectSpeciesFilter,
  selectAreaMonsterFilter,
  selectSpeciesMonsterFilter,
  selectCapturedFilter,
  selectAnyPending,
  selectUserCaptureMap,
  selectFilteredCapturedMonsters,
  selectCheckedAreaSpecialMonsters,
  selectCheckedSpeciesSpecialMonsters,
};
