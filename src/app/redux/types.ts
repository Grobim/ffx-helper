import { Action, ThunkAction } from "@reduxjs/toolkit";
import { ExtendedAuthInstance, ExtendedFirebaseInstance, ExtendedStorageInstance } from "react-redux-firebase";
import { store } from "./store";
import { UserProfile } from "../../features/auth";

interface FirestoreSchema {
  users: UserProfile;
}

interface FirestoreState<T extends Record<string, any> = FirestoreSchema> {
  status: {
    requesting: { [P in keyof T]: boolean; };
    requested: { [P in keyof T]: boolean; };
    timestamps: { [P in keyof T]: number; };
  };
  ordered: { [P in keyof T]: (T[P] & { id: string; })[]; };
  data: { [P in keyof T]: { [id: string]: T[P]; }; };
  listeners: any;
  errors: any;
  queries: any;
}

type RootState = ReturnType<typeof store.getState>;
type AppThunk = ThunkAction<
  void,
  RootState,
  ExtendedFirebaseInstance & ExtendedAuthInstance & ExtendedStorageInstance,
  Action<string>
>;

export type { FirestoreState, FirestoreSchema, RootState, AppThunk };

