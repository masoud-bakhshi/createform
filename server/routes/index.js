// const checkProject = require("../middlewares/project");
// const verifyJ = require("../middlewares/verifyJWT");
// const filteringWords = require("../middlewares/filteringWords");

module.exports = function routes(app) {
  //*******************************authentication */
  const formcreationjson = require("../controllers/formcreation.controller");
  app.post("/insertformjson",  formcreationjson.insertformjson);
  app.get("/getformjson", formcreationjson.getformjson);
  app.get("/getallformjson", formcreationjson.getallformjson);
  
  /************************************************************************************* doc */
  return app;
};
