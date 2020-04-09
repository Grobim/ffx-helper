import { createAction } from "@reduxjs/toolkit";

const firestoreOverride = createAction<Record<string, any>>(
  "firestore/override"
);

export { firestoreOverride };
