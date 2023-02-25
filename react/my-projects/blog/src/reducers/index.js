import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import UsersReducer from "../components/UsersReducer";

export default combineReducers({
  posts: postsReducer,
  users: UsersReducer,
});
