const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const SgroupSchema = new Schema(
  { 
    grpTitle: String, 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.SGROUP, SgroupSchema);
