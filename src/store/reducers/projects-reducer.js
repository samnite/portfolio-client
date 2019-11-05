import { GET_PROJECT, SET_LOADING } from "../types";

const initialState = {
  project: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };

    default:
      return state;
  }
};