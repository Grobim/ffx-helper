import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { useUserId } from "../auth";

import { selectAnyPending, selectCapturedMonsters } from "./selectors";

const useAnyPending = () => useSelector(selectAnyPending);

const useUserCaptureMapConnect = () => {
  const uid = useUserId();

  useFirestoreConnect(`captures/${uid}`);
};

const useSyncedCapturedMonsters = () => {
  useUserCaptureMapConnect();

  return useSelector(selectCapturedMonsters);
};

export { useAnyPending, useSyncedCapturedMonsters };
