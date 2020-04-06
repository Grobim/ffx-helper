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
  selectAreaMonsterFilter,
  selectCheckedAreaSpecialMonsters,
  updateTextFilter,
  updateLocationFilter,
  updateSpeciesFilter,
  updateAreaMonsterFilter,
} from ".";

const useAnyPending = () => useSelector(selectAnyPending);
const useCheckedAreaMonsters = () =>
  useSelector(selectCheckedAreaSpecialMonsters);

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

const useAreaMonsterFilter = () =>
  useSelectorAndActionCreator(selectAreaMonsterFilter, updateAreaMonsterFilter);

export {
  useAnyPending,
  useCheckedAreaMonsters,
  useSyncedFilteredCapturedMonsters,
  useTextFilter,
  useLocationFilter,
  useSpeciesFilter,
  useAreaMonsterFilter,
};
