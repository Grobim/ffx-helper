import { useSelector } from "react-redux";
import { selectAuth, selectProfile, selectUserId } from "./selectors";

const useAuth = () => useSelector(selectAuth);

const useProfile = () => useSelector(selectProfile);

const useUserId = () => useSelector(selectUserId);

export { useAuth, useProfile, useUserId };
