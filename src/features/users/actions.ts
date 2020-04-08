import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppThunkApiConfig } from "../../app/redux";

import { UserProfile } from "../auth";

import { User } from "./types";

const fetchUsers = createAsyncThunk<User[], void, AppThunkApiConfig>(
  "users/fetchUsers",
  async (_, { extra: { getFirebase } }) =>
    getFirebase()
      .firestore()
      .collection("users")
      .get()
      .then((res) => {
        const users: User[] = [];

        res.forEach((user) => {
          users.push({
            ...(user.data() as UserProfile),
            id: user.id,
          });
        });

        return users;
      })
);

export { fetchUsers };
