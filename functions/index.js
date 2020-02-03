const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

app.use(cors());

const { getAllProjects, getProject } = require("./handlers/projects");

app.get("/projects", getAllProjects);
app.get("/project/:projectId", getProject);

exports.api = functions.region("europe-west1").https.onRequest(app);
