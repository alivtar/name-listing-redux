import { combineReducers } from "redux";
import usersReducer from "./Users";

const rootReducer = combineReducers({
  usersData: usersReducer,
});

export default rootReducer;
