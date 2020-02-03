const { db } = require("../util/admin");

// Get All Projects
exports.getAllProjects = (req, res) => {
  db.collection("projects")
    .get()
    .then(data => {
      const projects = [];
      data.forEach(doc => {
        projects.push({
          link: doc.id,
          ...doc.data()
        });
      });
      return res.json(projects);
    })
    .catch(err => res.status(500).json({ error: err.code }));
};

// Get Single project
exports.getProject = (req, res) => {
  let projectData = {};
  db.doc(`/projects/${req.params.projectId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Project not found" });
      }
      projectData = doc.data();
      projectData.projectId = doc.id;
      return db
        .collection("projects")
        .where("projectId", "==", req.params.projectId)
        .get();
    })
    .then(data => {
      projectData.comments = [];
      data.forEach(doc => {
        projectData.comments.push(doc.data());
      });
      return res.json(projectData);
    })
    .catch(err => {
      res.status(500).json({ error: err.code });
    });
};
