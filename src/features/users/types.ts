import type { UserProfile } from "../auth";

interface User extends UserProfile {
  id: string;
}

interface UsersState {
  users: User[];
};

export type { User, UsersState };