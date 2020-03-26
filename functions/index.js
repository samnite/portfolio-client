const functions = require("firebase-functions");
const app = require("express")();
const cors = require("cors");

app.use(cors());

const { getAllProjects, getProject } = require("./handlers/projects");
const { login } = require("./handlers/user");

app.get("/projects", getAllProjects);
app.get("/project/:projectId", getProject);
app.post("/login", login);

exports.api = functions.region("europe-west1").https.onRequest(app);
