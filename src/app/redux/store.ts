import {
  combineReducers,
  compose,
  configureStore,
  getDefaultMiddleware,
  PayloadAction,
  Reducer,
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
import persistState, { mergePersistedState } from "redux-localstorage";
import adapter from "redux-localstorage/lib/adapters/localStorage";
import filter from "redux-localstorage-filter";

import { UserProfile } from "../../features/auth";

import { firestoreOverride } from "./actions";
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

function mergeOfflineOverride(next: Function) {
  return (state: any, action: PayloadAction<Record<string, unknown>>) => {
    const finalState =
      action.type === firestoreOverride.toString() && action.payload
        ? { ...state, ...action.payload }
        : state;
    return next(finalState, action);
  };
}

const getFirebaseStore = () => compose(mergeOfflineOverride)(firestoreReducer);

const getReducerMap = () => ({
  firebase: firebaseReducer as () => FirebaseReducer.Reducer<UserProfile>,
  firestore: getFirebaseStore() as Reducer<FirestoreState>,
  ...(reducers as typeof reducers),
});

const getRootReducer = () => {
  const rootReducer = combineReducers(getReducerMap());

  return compose(mergePersistedState())(rootReducer) as typeof rootReducer;
};

const storage = compose(
  filter(["firestore.data.settings", "app.lastConnectedUId"])
)(adapter(window.localStorage));

const store = configureStore({
  reducer: getRootReducer(),
  middleware: getDefaultMiddleware({
    thunk: { extraArgument: { getFirebase } },
    serializableCheck: {
      ignoredActions: [
        "@@reactReduxFirebase/LOGIN",
        "@@reduxFirestore/LISTENER_ERROR",
        "@@reduxFirestore/SET_LISTENER",
        "@@reduxFirestore/UNSET_LISTENER",
      ],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [persistState(storage, "FFX-HELPER/settings") as any],
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
