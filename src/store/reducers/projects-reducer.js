import {
  CLEAR_PROJECT,
  GET_ALL_PROJECTS,
  GET_PROJECT,
  SET_ALERT,
  SET_MAIN_PAGE,
} from "../types";
import { createReducer } from "../redux";

const initialState = {
  project: null,
  projects: null,
  alert: null,
  isMain: true,
};

export default createReducer(initialState, {
  [GET_PROJECT]: (state, { payload }) => ({
    ...state,
    project: payload,
    alert: null,
  }),
  [GET_ALL_PROJECTS]: (state, { payload }) => ({
    ...state,
    projects: payload,
    alert: null,
  }),
  [SET_MAIN_PAGE]: (state, { payload }) => ({
    ...state,
    isMain: payload,
    alert: null,
  }),
  [SET_ALERT]: (state, { payload }) => ({
    ...state,
    alert: payload,
  }),

  [CLEAR_PROJECT]: (state) => ({
    ...state,
    project: null,
  }),
});
