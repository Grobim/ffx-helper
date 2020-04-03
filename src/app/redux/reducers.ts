import {
  name as captureName,
  reducer as captureReducer,
} from "../../features/capture";
import countReducer from "../../features/counter/counterSlice";
import {
  name as usersName,
  reducer as usersReducer,
} from "../../features/users";

const reducers = {
  [captureName]: captureReducer,
  counter: countReducer,
  [usersName]: usersReducer,
};

export { reducers };
