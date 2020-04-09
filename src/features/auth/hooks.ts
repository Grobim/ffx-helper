import { useSelector } from "react-redux";

import { selectAuth, selectProfile, selectUserId } from "./selectors";

const useAuth = () => useSelector(selectAuth);

const useProfile = () => useSelector(selectProfile);
const useIsRole = (role: string) => {
  const profile = useProfile();

  if (!profile.role) {
    return false;
  }

  return role === profile.role;
};

const useUserId = () => useSelector(selectUserId);

export { useAuth, useProfile, useIsRole, useUserId };
