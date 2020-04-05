import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { useSelectorAndActionCreator } from "../../app/redux/hooks";

import { useUserId } from "../auth";

import {
  selectAnyPending,
  selectFilteredCapturedMonsters,
  selectTextFilter,
  selectLocationFilter,
  selectSpeciesFilter,
  updateTextFilter,
  updateLocationFilter,
  updateSpeciesFilter,
} from ".";

const useAnyPending = () => useSelector(selectAnyPending);

const useUserCaptureMapConnect = () => {
  const uid = useUserId();

  useFirestoreConnect(`captures/${uid}`);
};

const useSyncedFilteredCapturedMonsters = () => {
  useUserCaptureMapConnect();

  return useSelector(selectFilteredCapturedMonsters);
};

const useTextFilter = () =>
  useSelectorAndActionCreator(selectTextFilter, updateTextFilter);

const useLocationFilter = () =>
  useSelectorAndActionCreator(selectLocationFilter, updateLocationFilter);

const useSpeciesFilter = () =>
  useSelectorAndActionCreator(selectSpeciesFilter, updateSpeciesFilter);

export {
  useAnyPending,
  useSyncedFilteredCapturedMonsters,
  useTextFilter,
  useLocationFilter,
  useSpeciesFilter,
};
