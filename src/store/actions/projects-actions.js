import axios from "axios";
import {
  CLEAR_PROJECT,
  GET_ALL_PROJECTS,
  GET_PROJECT,
  SET_ALERT,
  SET_MAIN_PAGE,
} from "../types";

axios.defaults.baseURL =
  "https://europe-west1-portfolio-client-2e35a.cloudfunctions.net/api";

export const setAlert = (alert) => ({
  type: SET_ALERT,
  payload: alert,
});

export const getProject = (projectName) => (dispatch) => {
  axios
    .get(`/project/${projectName}`)
    .then((res) => {
      dispatch({
        type: GET_PROJECT,
        payload: res.data,
      });
    })
    .catch(({ response }) => {
      dispatch({
        type: SET_ALERT,
        payload: response.data.error,
      });
    });
};

export const getAllProjects = () => (dispatch) => {
  axios
    .get("/projects")
    .then((res) => {
      dispatch({
        type: GET_ALL_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ALERT,
        payload: err.message,
      });
    });
};

export const setMainPage = (isMain) => ({
  type: SET_MAIN_PAGE,
  payload: isMain,
});

export const clearProject = () => ({
  type: CLEAR_PROJECT,
});
