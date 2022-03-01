const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const SdetailSchema = new Schema(
  { 
    grpId: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.SGROUP,
      }, 

      key: String, 
      fOpen: Boolean,
      fInsert: Boolean,
      fUpdate: Boolean,
      fDelete: Boolean,
      fView: Boolean,
      fPrint:Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.SDETAIL, SdetailSchema);
