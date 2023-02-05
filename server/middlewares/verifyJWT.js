const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token || !req.session.user) {
      var err = new Error("you need token");
      err.status = 400;
      throw err;

      // res.send("you need token");
    } else {
      jwt.verify(token, process.env.JWTOKEN, (err, decoded) => {
        if (err) {
          // console.log(err);
          // res.json({ auth: false, message: "you fail auth" });

          var err = new Error("you fail auth");
          err.status = 400;
          throw err;
        } else {
          req.userId = decoded.id;
          next();
        }
      });
    }
  } catch (error) {
    next(error);
  }
};

(isUserAuth = verifyJWT),
  (req, res) => {
    try {
      res.send("you are authenticate");
    } catch (error) {}
  };

module.exports = {
  isUserAuth,
  verifyJWT,
};
