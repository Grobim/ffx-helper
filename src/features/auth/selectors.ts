import { RootState } from "../../app/redux";

const selectProfile = (state: RootState) => state.firebase.profile;

const selectAuth = (state: RootState) => state.firebase.auth;

const selectUserId = (state: RootState) => selectAuth(state).uid;

export { selectProfile, selectAuth, selectUserId };
