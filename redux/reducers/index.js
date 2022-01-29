import { combineReducers } from "redux";
import LoginDetailsReducer from "./LoginDetailsReducer";
import PostReducer from "./PostReducer";

export const reducers = combineReducers({
  LoginDetails: LoginDetailsReducer,
  PostUpload: PostReducer
})