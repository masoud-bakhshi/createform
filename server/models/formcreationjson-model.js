const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Formcreationjson = new Schema(
  {
    id: { type: String, required: false },
    username: { type: String, required: false },
    formname: { type: String, required: false },
    formjson: { type: String, required: false },
    
  },
  { timestamps: true }
);
//
module.exports = mongoose.model("formcreationjson", Formcreationjson);
