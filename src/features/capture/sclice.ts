import { createSlice } from "@reduxjs/toolkit";

import { monsters } from "../../models";

import { CaptureState } from "./types";

const mappedMonsters = monsters.map((monster) => ({
  ...monster,
  capturedCount: 0,
  pendingCaptureCount: 0,
}));

const initialState: CaptureState = {
  monsters: mappedMonsters,
};

const slice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    addPending: ({ monsters }, { payload }) => {
      const monster = monsters.find(({ name }) => name === payload);

      if (monster) {
        monster.pendingCaptureCount++;
      }
    },
    resetPendings: ({ monsters }) => {
      monsters.forEach((monster) => (monster.pendingCaptureCount = 0));
    },
    savePendings: ({ monsters }) => {
      monsters.forEach((monster) => {
        monster.capturedCount =
          monster.capturedCount + monster.pendingCaptureCount;
        monster.pendingCaptureCount = 0;
      });
    },
  },
});

export { slice };
