import { createSlice } from "@reduxjs/toolkit";

import { fetchUsers } from "./actions";
import type { UsersState } from "./types";

const initialState: UsersState = { users: [] };

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

export { initialState, slice };
