import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { monsters } from "../../models";
import type { MonsterKey, Location, Species } from "../../models";

import { triggerSaveCapture } from "./actions";
import type { CaptureState } from "./types";

const mappedMonsters = monsters.map((monster) => ({
  ...monster,
  capturedCount: 0,
  pendingCaptureCount: 0,
}));

const initialState: CaptureState = {
  monsters: mappedMonsters,
  pendingSave: {},
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
  },
  extraReducers: (builder) => {
    builder.addCase(triggerSaveCapture.pending, (state) => {
      const { monsters } = state;

      state.pendingSave = monsters
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
      state.pendingSave = {};
    });

    builder.addCase(
      triggerSaveCapture.rejected,
      ({ monsters, pendingSave }) => {
        monsters.forEach((monster) => {
          const monsterPendings = pendingSave[monster.key];

          if (monsterPendings) {
            monster.pendingCaptureCount = monsterPendings;

            delete pendingSave[monster.key];
          }
        });
      }
    );
  },
});

export { slice };
