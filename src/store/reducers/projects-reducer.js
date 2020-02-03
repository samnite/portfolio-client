import {
  CLEAR_PROJECT,
  GET_PROJECT,
  SET_ALERT,
  SET_MAIN_PAGE,
  GET_ALL_PROJECTS
} from "../types";
import { createReducer } from "../redux";

const initialState = {
  project: null,
  projects: null,
  alert: null,
  isMain: true
};

export default createReducer(initialState, {
  [GET_PROJECT]: (state, { payload }) => {
    return {
      ...state,
      project: payload,
      alert: null
    };
  },
  [GET_ALL_PROJECTS]: (state, { payload }) => {
    return {
      ...state,
      projects: payload,
      alert: null
    };
  },
  [SET_MAIN_PAGE]: (state, { payload }) => {
    return {
      ...state,
      isMain: payload,
      alert: null
    };
  },
  [SET_ALERT]: (state, { payload }) => {
    return {
      ...state,
      alert: payload
    };
  },

  [CLEAR_PROJECT]: state => {
    return {
      ...state,
      project: null
    };
  }
});
