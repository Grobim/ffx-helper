import type { RootState, FirestoreState } from "./types";

function selectFirestoreDataOrOrdered(state: RootState, ordered?: true): FirestoreState['ordered'];
function selectFirestoreDataOrOrdered(state: RootState, ordered?: false): FirestoreState['data'];
function selectFirestoreDataOrOrdered
  (state: RootState, ordered: boolean = false): FirestoreState['data'] | FirestoreState['ordered'] {
  if (ordered) {
    return state.firestore.ordered;
  } else {
    return state.firestore.data;
  }
}

export { selectFirestoreDataOrOrdered };