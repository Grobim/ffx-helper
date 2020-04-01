import { useSelector } from "react-redux";
import { selectAuth, selectProfile } from "./selectors";

const useAuth = () => useSelector(selectAuth);

const useProfile = () => useSelector(selectProfile);

export { useAuth, useProfile };
