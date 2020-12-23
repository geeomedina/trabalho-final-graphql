const admin = require("firebase-admin");

module.exports = {
    produto: () => {
      return admin
        .database()
        .ref("produtos")
        .once("value")
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]));
    }
};
