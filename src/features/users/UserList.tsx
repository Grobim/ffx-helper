import React from "react";

import { useFetchedUsers, useSyncedUsers } from "./hooks";

function UserList() {
  const fetchedUsers = useFetchedUsers();
  const syncedUsers = useSyncedUsers();
  
  return (
    <div>
      <h3>UserList</h3>
      <pre>{JSON.stringify(fetchedUsers, null, 2)}</pre>
      <pre>{JSON.stringify(syncedUsers, null, 2)}</pre>
    </div>
  );
}

export { UserList };

