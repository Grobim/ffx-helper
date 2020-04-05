import { ActionCreatorWithPayload, Selector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./types";
import { useCallback } from "react";

const useSelectorAndActionCreator = <T = unknown, A = unknown>(
  selector: Selector<RootState, T>,
  actionCreator: ActionCreatorWithPayload<A>
): [T, (newValue: A) => void] => {
  const dispatch = useDispatch();

  const value = useSelector(selector);

  const setValue = useCallback(
    (newValue: A) => {
      dispatch(actionCreator(newValue));
    },
    [dispatch, actionCreator]
  );

  return [value, setValue];
};

export { useSelectorAndActionCreator };
