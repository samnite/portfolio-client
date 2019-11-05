import { GET_PROJECT, SET_MAIN_PAGE } from "../types";

const initialState = {
  project: null,
  error: null,
  isMain: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case SET_MAIN_PAGE:
      return {
        ...state,
        isMain: action.payload
      };

    default:
      return state;
  }
};
