import { GET_PROJECT, SET_LOADING } from "../types";
import { config } from "../../firebase-config";
import * as firebase from "firebase";

export const getProject = () => async dispatch => {
  console.log("work from getProject");
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const docRef = db.collection("projects").doc("github-finder");
  try {
    setLoading();

    await docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          dispatch({
            type: GET_PROJECT,
            payload: doc.data()
          });
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  } catch (err) {
    console.log(err);
  }
};

export const setLoading = () => {
  console.log("Working Loading");
  return {
    type: SET_LOADING
  };
};
