import React from "react";
import { useHistory } from "react-router-dom";

import { useFetchedUsers, useSyncedUsers } from "./hooks";

function UserList() {
  const history = useHistory();

  const fetchedUsers = useFetchedUsers();
  const syncedUsers = useSyncedUsers();

  function goBack() {
    history.goBack();
  }

  return (
    <div>
      <h3>UserList</h3>
      <button onClick={goBack}>Back</button>
      <p>Fetched</p>
      <pre>{JSON.stringify(fetchedUsers, null, 2)}</pre>
      <p>Synced</p>
      <pre>{JSON.stringify(syncedUsers, null, 2)}</pre>
    </div>
  );
}

export { UserList };
