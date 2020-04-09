import appSlice from "../../app/redux/slice";
import countReducer from "../../features/counter/counterSlice";
import {
  name as captureName,
  reducer as captureReducer,
} from "../../features/capture";
import {
  name as usersName,
  reducer as usersReducer,
} from "../../features/users";

const { name: appName, reducer: appReducer } = appSlice;

const reducers = {
  [appName]: appReducer,
  [captureName]: captureReducer,
  counter: countReducer,
  [usersName]: usersReducer,
};

export { reducers };
