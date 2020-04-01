import countReducer from "../../features/counter/counterSlice";
import {
  name as usersName,
  reducer as usersReducer,
} from "../../features/users";

const reducers = {
  counter: countReducer,
  [usersName]: usersReducer,
};

export { reducers };
