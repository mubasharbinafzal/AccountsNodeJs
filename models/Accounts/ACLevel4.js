const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const ACLevel3Schema = new Schema(
  { 
    Code: String, 
    Title: String,
    ENTEREDDATE: Date,
    code: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.ACLEVEL3,
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

module.exports = mongoose.model(STRINGS.MODALS.ACLEVEL3, ACLevel3Schema);
