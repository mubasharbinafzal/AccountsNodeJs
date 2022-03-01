const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const ACLevelSchema = new Schema(
  { 
    Code: String, 
    Title: String,
    EnteredDate: Date,
    userId: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.SUSER,
      }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.ACLEVEL, ACLevelSchema);
