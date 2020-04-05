import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { fetchUsers } from "./actions";
import { selectFirestoreUsers, selectStoreUsers } from "./selectors";

const useFetchedUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return useSelector(selectStoreUsers);
};

const useSyncedUsers = () => {
  useFirestoreConnect("users");

  return useSelector(selectFirestoreUsers);
};

export { useFetchedUsers, useSyncedUsers };
