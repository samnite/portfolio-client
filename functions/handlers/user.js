const firebase = require("firebase");
const {validateLoginData} = require("../util/validators");

// Log In User
exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const {valid, errors} = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({token});
    })
    .catch(err => {
      // auth/wrong-password
      // auth/user-not-user
      console.error(err.code);
      return res
        .status(403)
        .json({general: "Wrong Credentials. Please try again"});
    });
};
