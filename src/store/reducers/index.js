import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  news: newsReducer,
  user: loginReducer,
});
