import { combineReducers } from "redux";
import projectReducer from "./projects-reducer";

export default combineReducers({
  project: projectReducer
});
