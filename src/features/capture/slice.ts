import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import groupBy from "lodash/groupBy";

import {
  Location,
  monsterAreaMonsters,
  monsters,
  speciesSpecialMonsters,
} from "../../models";
import type {
  MonsterKey,
  MonsterArena,
  Species,
  SpecialSpecies,
} from "../../models";

import { triggerSaveCapture } from "./actions";
import type { CaptureState } from "./types";

const mappedMonsters = monsters.map((monster) => ({
  ...monster,
  capturedCount: 0,
  pendingCaptureCount: 0,
}));

const monstersByMonsterArena = groupBy(monsters, "monsterArena");
const mappedAreaSpecialMonsters = Object.keys(monsterAreaMonsters).map(
  (monsterArenas) => ({
    ...monsterAreaMonsters[monsterArenas as MonsterArena],
    monsterArenas: monsterArenas as MonsterArena,
    monsterList: monstersByMonsterArena[monsterArenas].map(
      (monster) => monster.key
    ),
  })
);

const monstersBySpecies = groupBy(monsters, "species");
const mappedSpeciesSpecialMonsters = Object.keys(speciesSpecialMonsters).map(
  (species) => ({
    ...speciesSpecialMonsters[species as SpecialSpecies],
    monsterList: monstersBySpecies[species].map((monster) => monster.key),
    targetSpecies: species as SpecialSpecies,
  })
);

const initialState: CaptureState = {
  monsters: mappedMonsters,
  monsterArenaMonsters: mappedAreaSpecialMonsters,
  speciesSpecialMonsters: mappedSpeciesSpecialMonsters,
  pendingCaptureSaves: {},
  textFilter: "",
  capturedFilter: {
    isActive: false,
    count: 10,
  },
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
      state.monsterAreaFilter = payload;
    },
    updateSpeciesMonsterFilter: (
      state,
      { payload }: PayloadAction<MonsterKey>
    ) => {
      state.speciesMonsterFilter = payload;
    },
    toggleCapturedFilter: ({ capturedFilter }) => {
      capturedFilter.isActive = !capturedFilter.isActive;
    },
    setCapturedFilterCount: (
      { capturedFilter },
      { payload }: PayloadAction<number>
    ) => {
      capturedFilter.count = payload;
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
