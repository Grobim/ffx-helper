import {
  configureStore,
  getDefaultMiddleware,
  Reducer,
  combineReducers,
} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import {
  firebaseReducer,
  FirebaseReducer,
  getFirebase,
  ReactReduxFirebaseConfig,
  ReactReduxFirebaseProviderProps,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";

import { UserProfile } from "../../features/auth";

import { reducers } from "./reducers";
import { FirestoreState } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyDSE59WVhk1moEtQr8rvP6Q4ajxBPfjl5w",
  authDomain: "ffx-helper-c9c2d.firebaseapp.com",
  databaseURL: "https://ffx-helper-c9c2d.firebaseio.com",
  projectId: "ffx-helper-c9c2d",
  storageBucket: "ffx-helper-c9c2d.appspot.com",
  messagingSenderId: "529600903231",
  appId: "1:529600903231:web:e910813cfb2d417269208a",
  measurementId: "G-1B5XS14DDM",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();
firebase.functions();

const getReducerMap = () => ({
  firebase: firebaseReducer as () => FirebaseReducer.Reducer<UserProfile, any>,
  firestore: firestoreReducer as Reducer<FirestoreState>,
  ...reducers,
});

const store = configureStore({
  reducer: getReducerMap(),
  middleware: getDefaultMiddleware({ thunk: { extraArgument: getFirebase } }),
});

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(combineReducers(getReducerMap()));
    });
  }
}

const rrfConfig: Partial<ReactReduxFirebaseConfig> = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rffProps: ReactReduxFirebaseProviderProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { store, rffProps };
