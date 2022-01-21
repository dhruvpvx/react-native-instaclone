import { combineReducers } from "redux";
import LoginDetailsReducer from "./LoginDetailsReducer";

export const reducers = combineReducers({
  LoginDetails: LoginDetailsReducer
})