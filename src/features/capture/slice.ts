import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { monsters } from "../../models";

import { CaptureState, MappedMonster } from "./types";
import type { getFirebase } from "react-redux-firebase";

const mappedMonsters = monsters.map((monster) => ({
  ...monster,
  capturedCount: 0,
  pendingCaptureCount: 0,
}));

const initialState: CaptureState = {
  monsters: mappedMonsters,
  pendingSave: {},
};

const triggerSaveCapture = createAsyncThunk<
  void,
  MappedMonster[],
  { extra: { getFirebase: typeof getFirebase } }
>(
  "capture/triggerSaveCapture",
  async (monsters, { extra: { getFirebase } }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const auth = firebase.auth().currentUser;

    if (!auth) {
      throw new Error("Must be connected to save");
    }

    const captureMapUpdates = monsters
      .filter((monster) => monster.pendingCaptureCount)
      .reduce(
        (cur, { key, pendingCaptureCount, capturedCount }) => ({
          ...cur,
          [key]: Math.min(pendingCaptureCount + capturedCount, 10),
        }),
        {}
      );

    const captureMapRef = firestore.collection("captures").doc(auth.uid);

    await captureMapRef.set(captureMapUpdates, { merge: true });
  }
);

const resetPendings = ({ monsters }: CaptureState) => {
  monsters.forEach((monster) => (monster.pendingCaptureCount = 0));
};

const slice = createSlice({
  name: "capture",
  initialState,
  reducers: {
    addPending: ({ monsters }, { payload }) => {
      const monster = monsters.find(({ key }) => key === payload);

      if (monster) {
        monster.pendingCaptureCount++;
      }
    },
    resetPendings,
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
          }
        });
      }
    );
  },
});

export { slice, triggerSaveCapture };
