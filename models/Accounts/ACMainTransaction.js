const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const ACMainTransactionSchema = new Schema(
  { 
    docNo: String, 
    voucherDate: Date,
    doctype: String,
    descr: String,
    depositDay:Number,
    post:Number,
    reference: String,
    enteredDate:String ,
    userId: {
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.SUSER,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(STRINGS.MODALS.ACMAINTRANSACTION, ACMainTransactionSchema);
