const filtering = require("../utils/filter");

const filteringWord = (req, res, next) => {
  try {
    if (filtering.hasSwear(JSON.stringify(req.body))) {
      // var err = new Error("bad word detection");
      // err.status = 400;
      // throw err;
      console.log("bad word detection");
      res.send("bad word detection");
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  filteringWord,
};
