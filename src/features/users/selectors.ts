import { RootState } from "../../app/redux";
import { selectFirestoreDataOrOrdered } from "../../app/redux/selectors";

const selectFirestoreUsers = (state: RootState) =>
  selectFirestoreDataOrOrdered(state).users;

const selectStoreUsers = (state: RootState) =>
  state.users.users;

export { selectFirestoreUsers, selectStoreUsers };