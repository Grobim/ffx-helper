import type { RootState, FirestoreState } from "./types";

const selectFireStore = (state: RootState) => state.firestore;

function getSelectFirestoreDataOrOrdered(
  ordered?: false
): (state: RootState) => FirestoreState["data"];
function getSelectFirestoreDataOrOrdered(
  ordered?: true
): (state: RootState) => FirestoreState["ordered"];
function getSelectFirestoreDataOrOrdered(
  ordered: boolean = false
): (state: RootState) => FirestoreState["data"] | FirestoreState["ordered"] {
  return (state) => {
    if (ordered) {
      return selectFireStore(state).ordered;
    } else {
      return selectFireStore(state).data;
    }
  };
}

export { getSelectFirestoreDataOrOrdered };
