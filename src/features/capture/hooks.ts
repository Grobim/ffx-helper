import { useSelector } from "react-redux";

import { selectAnyPending, selectMonsters } from "./selectors";

const useAnyPending = () => {
  return useSelector(selectAnyPending);
};

const useMonsters = () => {
  return useSelector(selectMonsters);
};

export { useAnyPending, useMonsters };
