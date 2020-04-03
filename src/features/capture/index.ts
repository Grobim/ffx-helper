import { slice } from "./sclice";

export * from "./hooks";
export * from "./selectors";
export * from "./types";
export const { name, reducer } = slice;
export const { addPending, resetPendings, savePendings } = slice.actions;
