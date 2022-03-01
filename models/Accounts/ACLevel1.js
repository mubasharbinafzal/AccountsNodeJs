const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const ACLevel1Schema = new Schema(
  { 
    Code: String, 
    Title: String,
    ENTEREDDATE: Date,
    code: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.ACLEVEL,
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.SUSER,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.ACLEVEL1, ACLevel1Schema);
