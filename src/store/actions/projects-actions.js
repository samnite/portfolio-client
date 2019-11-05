import { GET_PROJECT } from "../types";
import { config } from "../../firebase-config";
import * as firebase from "firebase";

firebase.initializeApp(config);
const db = firebase.firestore();

export const getProject = project_name => async dispatch => {
  const docRef = db.collection("projects").doc(project_name);
  try {
    await docRef.get().then(doc => {
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
    });
  } catch (err) {
    console.log("Error getting document:", err);
  }
};
