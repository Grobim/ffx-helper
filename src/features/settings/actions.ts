import { createAsyncThunk } from "@reduxjs/toolkit";
import { isEmpty } from "react-redux-firebase";

import { AppThunkApiConfig } from "../../app/redux";

import { selectAuth } from "../auth";

import { UserSettings } from "./types";

const triggerUserSettingsUpdate = createAsyncThunk<
  void,
  Partial<UserSettings>,
  AppThunkApiConfig
>(
  "settings/triggerUserSettingsUpdate",
  async (userSettings, { getState, extra: { getFirebase } }) => {
    const firestore = getFirebase().firestore();

    const auth = selectAuth(getState());

    if (isEmpty(auth)) {
      throw new Error("Must be connected to save settings");
    }

    return firestore
      .collection("settings")
      .doc(auth.uid)
      .set(userSettings, { merge: true });
  }
);

export { triggerUserSettingsUpdate };
