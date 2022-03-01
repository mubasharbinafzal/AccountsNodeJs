const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const STRINGS = require("../../utils/texts");

const ACSubTransactionSchema = new Schema(
  { 
    vid:Number, 
    voucherDate: Date,
    descr: String,
    debit: Number,
    credit: Number,
    mainCode:String,
    other:String,
    enteredDate:String , 
    docNo: {    
        type: Schema.Types.ObjectId,
        ref: STRINGS.MODALS.ACMAINTRANSACTION,
    },
    account: {
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

module.exports = mongoose.model(STRINGS.MODALS.ACSUBTRANSACTION, ACSubTransactionSchema);
