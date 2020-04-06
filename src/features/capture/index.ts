import { slice } from "./slice";

export * from "./actions";
export * from "./hooks";
export * from "./selectors";
export * from "./types";

export const { name, reducer } = slice;
export const {
  addPending,
  resetPendings,
  updateTextFilter,
  updateLocationFilter,
  updateSpeciesFilter,
  updateAreaMonsterFilter,
  updateSpeciesMonsterFilter,
} = slice.actions;
