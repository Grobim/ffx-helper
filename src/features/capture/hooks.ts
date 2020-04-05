import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { useSelectorAndActionCreator } from "../../app/redux/hooks";

import { useUserId } from "../auth";

import {
  selectAnyPending,
  selectFilteredCapturedMonsters,
  selectTextFilter,
  updateTextFilter,
} from ".";

const useAnyPending = () => useSelector(selectAnyPending);

const useUserCaptureMapConnect = () => {
  const uid = useUserId();

  useFirestoreConnect(`captures/${uid}`);
};

const useSyncedCapturedMonsters = () => {
  useUserCaptureMapConnect();

  return useSelector(selectFilteredCapturedMonsters);
};

const useTextFilter = () =>
  useSelectorAndActionCreator(selectTextFilter, updateTextFilter);

export { useAnyPending, useSyncedCapturedMonsters, useTextFilter };
