const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const MainTreeSchema = new Schema(
  {  
    parent: String, 
    nodeText: String,
    dType: String,
    document:String,
    comments: String,
    srno: Integer,   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.MAINTREE, MainTreeSchema);
