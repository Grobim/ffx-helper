import { useSelector } from "react-redux";
import { selectUserSettings } from "./selectors";
import { useUserId } from "../auth";
import { useFirestoreConnect } from "react-redux-firebase";

const useUserSettingsConnect = () => {
  const uid = useUserId();

  useFirestoreConnect(`settings/${uid}`);
};

const useSyncedUserSettings = () => {
  useUserSettingsConnect();

  return useSelector(selectUserSettings) || {};
};

export { useSyncedUserSettings };
