import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import groupBy from "lodash/groupBy";

import { areaSpecialMonsters, monsters } from "../../models";
import type { MonsterKey, Location, Species } from "../../models";

import { triggerSaveCapture } from "./actions";
import type { CaptureState } from "./types";

const mappedMonsters = monsters.map((monster) => ({
  ...monster,
  capturedCount: 0,
  pendingCaptureCount: 0,
}));

const monstersByLocation = groupBy(monsters, "location");
const mappedAreaSpecialMonsters = Object.keys(areaSpecialMonsters).map(
  (location) => ({
    ...areaSpecialMonsters[location as Location],
    location: location as Location,
    monsterList: monstersByLocation[location].map((monster) => monster.key),
  })
);

const initialState: CaptureState = {
  monsters: mappedMonsters,
  areaSpecialMonsters: mappedAreaSpecialMonsters,
  pendingCaptureSaves: {},
  textFilter: "",
};

const resetPendings = ({ monsters }: CaptureState) => {
  monsters.forEach((monster) => (monster.pendingCaptureCount = 0));
};

const slice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    addPending: ({ monsters }, { payload }: PayloadAction<MonsterKey>) => {
      const monster = monsters.find(({ key }) => key === payload);

      if (monster) {
        monster.pendingCaptureCount++;
      }
    },
    resetPendings,
    updateTextFilter: (state, { payload }: PayloadAction<string>) => {
      state.textFilter = payload;
    },
    updateLocationFilter: (state, { payload }: PayloadAction<Location>) => {
      state.locationFilter = payload;
    },
    updateSpeciesFilter: (state, { payload }: PayloadAction<Species>) => {
      state.speciesFilter = payload;
    },
    updateAreaMonsterFilter: (
      state,
      { payload }: PayloadAction<MonsterKey>
    ) => {
      state.areaMonsterFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(triggerSaveCapture.pending, (state) => {
      const { monsters } = state;

      state.pendingCaptureSaves = monsters
        .filter((monster) => monster.pendingCaptureCount)
        .reduce(
          (prev, { key, pendingCaptureCount }) => ({
            ...prev,
            [key]: pendingCaptureCount,
          }),
          {}
        );

      resetPendings(state);
    });

    builder.addCase(triggerSaveCapture.fulfilled, (state) => {
      state.pendingCaptureSaves = {};
    });

    builder.addCase(
      triggerSaveCapture.rejected,
      ({ monsters, pendingCaptureSaves }) => {
        monsters.forEach((monster) => {
          const monsterPendings = pendingCaptureSaves[monster.key];

          if (monsterPendings) {
            monster.pendingCaptureCount = monsterPendings;

            delete pendingCaptureSaves[monster.key];
          }
        });
      }
    );
  },
});

export { slice };
