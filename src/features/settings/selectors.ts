import { createSelector } from "@reduxjs/toolkit";

import { selectUserId } from "../auth";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";
import { UserSettings } from "./types";

const defaultSettings: UserSettings = {
  darkMode: false,
};

const selectUserSettings = createSelector(
  [selectUserId, getSelectFirestoreDataOrOrdered()],
  (userId, firebaseData) =>
    firebaseData.settings && {
      ...defaultSettings,
      ...firebaseData.settings[userId],
    }
);

export { selectUserSettings };
