import { createAsyncThunk } from "@reduxjs/toolkit";
import { isEmpty } from "react-redux-firebase";
import sourceFirebase from "firebase/app";

import { AppThunkApiConfig } from "../../app/redux";
import type { MonsterKey } from "../../models";
import { selectAuth } from "../auth";

import type { MappedMonster } from "./types";

const triggerSaveCapture = createAsyncThunk<
  void,
  MappedMonster[],
  AppThunkApiConfig
>(
  "capture/triggerSaveCapture",
  async (monsters, { extra: { getFirebase }, getState }) => {
    const firestore = getFirebase().firestore();

    const auth = selectAuth(getState());

    if (isEmpty(auth)) {
      throw new Error("Must be connected to save captures");
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

    return await captureMapRef.set(captureMapUpdates, { merge: true });
  }
);

const triggerResetCapture = createAsyncThunk<
  void,
  MonsterKey,
  AppThunkApiConfig
>(
  "capture/triggerResetCapture",
  async (key: MonsterKey, { extra: { getFirebase }, getState }) => {
    const firestore = getFirebase().firestore();

    const auth = selectAuth(getState());

    if (isEmpty(auth)) {
      throw new Error("Must be connected to reset captures");
    }

    const captureMapRef = firestore.collection("captures").doc(auth.uid);

    return await captureMapRef.update({
      [key]: sourceFirebase.firestore.FieldValue.delete(),
    });
  }
);

export { triggerSaveCapture, triggerResetCapture };
