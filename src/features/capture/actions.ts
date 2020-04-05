import { createAsyncThunk } from "@reduxjs/toolkit";
import type { getFirebase } from "react-redux-firebase";

import { MappedMonster } from "./types";

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

export { triggerSaveCapture };
