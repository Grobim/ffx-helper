import { createAsyncThunk } from "@reduxjs/toolkit";
import { isEmpty } from "react-redux-firebase";

import {
  AppThunkApiConfig,
  firestoreOverride,
  selectLastConnectedUserId,
} from "../../app/redux";

import { selectAuth } from "../auth";

import { UserSettings } from "./types";

const triggerUserSettingsUpdate = createAsyncThunk<
  void,
  Partial<UserSettings>,
  AppThunkApiConfig
>(
  "settings/triggerUserSettingsUpdate",
  async (userSettings, { getState, dispatch, extra: { getFirebase } }) => {
    const firestore = getFirebase().firestore();

    const auth = selectAuth(getState());
    const lastConnectedUserId = selectLastConnectedUserId(getState());

    if (isEmpty(auth)) {
      dispatch(
        firestoreOverride({
          data: {
            settings: {
              [lastConnectedUserId || "undefined"]: userSettings,
            },
          },
        })
      );
    } else {
      return firestore
        .collection("settings")
        .doc(auth.uid)
        .set(userSettings, { merge: true });
    }
  }
);

export { triggerUserSettingsUpdate };
