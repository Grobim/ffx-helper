import { Dispatch } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";

import { UserProfile } from "../../features/auth";
import { CaptureMap } from "../../features/capture";
import { UserSettings } from "../../features/settings/types";

import { store } from "./store";

interface FirestoreSchema {
  users: UserProfile;
  captures: CaptureMap;
  settings: UserSettings;
}

interface FirestoreState<T extends Record<string, any> = FirestoreSchema> {
  status: {
    requesting: { [P in keyof T]: boolean };
    requested: { [P in keyof T]: boolean };
    timestamps: { [P in keyof T]: number };
  };
  ordered: { [P in keyof T]: (T[P] & { id: string })[] };
  data: { [P in keyof T]: { [id: string]: T[P] } };
  listeners: any;
  errors: any;
  queries: any;
}

type RootState = ReturnType<typeof store.getState>;

type AppThunkApiConfig = {
  state: RootState;
  dispatch: Dispatch;
  extra: { getFirebase: typeof getFirebase };
  rejectValue?: unknown;
};

export type { FirestoreState, FirestoreSchema, RootState, AppThunkApiConfig };
