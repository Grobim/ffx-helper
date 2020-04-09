import { createSelector } from "@reduxjs/toolkit";

import { selectUserId } from "../auth";
import {
  getSelectFirestoreDataOrOrdered,
  selectLastConnectedUserId,
} from "../../app/redux/selectors";
import { UserSettings } from "./types";

const defaultSettings: UserSettings = {
  darkMode: false,
};

const selectUserSettings = createSelector(
  [selectUserId, selectLastConnectedUserId, getSelectFirestoreDataOrOrdered()],
  (userId, selectLastConnectedUserId, firestoreData) => {
    return (
      firestoreData.settings && {
        ...defaultSettings,
        ...firestoreData.settings[selectLastConnectedUserId || userId],
      }
    );
  }
);

export { selectUserSettings };
