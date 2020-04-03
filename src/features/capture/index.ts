import { slice, triggerSaveCapture } from "./slice";

export * from "./hooks";
export * from "./selectors";
export * from "./types";

export { triggerSaveCapture };
export const { name, reducer } = slice;
export const { addPending, resetPendings } = slice.actions;
