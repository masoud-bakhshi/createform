const Joi = require("joi");

checkProject = async (req, res, next) => {
  try {
    const data = req.body;

    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      phone: Joi.string()
        .regex(/^\d{3}-\d{3}-\d{4}$/)
        .required(),
      birthday: Joi.date().max("1-1-2004").iso(),
    });

    let error = schema.validate(data);
    if (error) {
      var err = new Error("bad request");
      err.status = 400;
      throw err;
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkProject,
};
