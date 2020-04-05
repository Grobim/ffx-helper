import { RootState } from "../../app/redux";
import { getSelectFirestoreDataOrOrdered } from "../../app/redux/selectors";

const selectFirestoreUsers = (state: RootState) =>
  getSelectFirestoreDataOrOrdered()(state).users;

const selectStoreUsers = (state: RootState) => state.users.users;

export { selectFirestoreUsers, selectStoreUsers };
