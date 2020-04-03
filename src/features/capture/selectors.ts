import { RootState } from "../../app/redux";

const selectAnyPending = (state: RootState) =>
  state.capture.monsters.reduce(
    (prev, cur) => prev + cur.pendingCaptureCount,
    0
  ) > 0;
const selectMonsters = (state: RootState) => state.capture.monsters;

export { selectAnyPending, selectMonsters };
