const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const SuserSchema = new Schema(
  { 
    grpId: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.SGROUP,
      }, 

    userName: String, 
    userType: {
        type: String,
        enum: [STRINGS.STATUS.ADMINISTRATOR, STRINGS.STATUS.MASTER , STRINGS.STATUS.USER],
        default: STRINGS.STATUS.USER,
      },
    userPassw : String,
    userSnap: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.SUSER, SuserSchema);
