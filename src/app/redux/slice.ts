import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "./types";

const initialState: AppState = {};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateLastConnectedUid: (state, { payload }: PayloadAction<string>) => {
      state.lastConnectedUId = payload;
    },
  },
});

export default slice;
