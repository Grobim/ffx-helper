import { useCallback, Dispatch } from "react";
import { ActionCreatorWithPayload, Selector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./types";

const useSelectorAndActionCreator = <Returned = unknown, Arg = Returned>(
  selector: Selector<RootState, Returned>,
  actionCreator: ActionCreatorWithPayload<Arg>
): [Returned, Dispatch<Arg>] => {
  const dispatch = useDispatch();

  const value = useSelector(selector);

  const setValue = useCallback(
    (arg: Arg) => {
      dispatch(actionCreator(arg));
    },
    [dispatch, actionCreator]
  );

  return [value, setValue];
};

export { useSelectorAndActionCreator };
