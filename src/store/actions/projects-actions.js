import { CLEAR_PROJECT, GET_PROJECT, SET_ALERT, SET_MAIN_PAGE } from "../types";
import axios from "axios";

axios.defaults.baseURL =
  "https://europe-west1-portfolio-client-2e35a.cloudfunctions.net/api";

export const setAlert = alert => {
  return {
    type: SET_ALERT,
    payload: alert
  };
};

export const getProject = project_name => async dispatch => {
  axios
    .get(`/project/${project_name}`)
    .then(res => {
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_ALERT,
        payload: response.data.error
      });
    });
};

export const setMainPage = isMain => {
  return {
    type: SET_MAIN_PAGE,
    payload: isMain
  };
};

export const clearProject = () => {
  return {
    type: CLEAR_PROJECT
  };
};
