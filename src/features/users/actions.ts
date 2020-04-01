import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirebase } from "react-redux-firebase";

import { UserProfile } from "../auth";

import { User } from "./types";

const fetchUsers = createAsyncThunk<
  User[],
  void,
  { extra: typeof getFirebase }
>("users/fetchUsers", async (_, { extra: getFirebase }) =>
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
