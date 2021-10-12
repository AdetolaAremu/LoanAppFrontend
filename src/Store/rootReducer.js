import { combineReducers } from "redux";
import userReducer from "../Pages/Users/reducer";

export default combineReducers({
  users:userReducer
});