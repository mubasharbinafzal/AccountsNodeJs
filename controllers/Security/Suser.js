const STRINGS = require("../../utils/texts"); 
const response = require("../../utils/response");
const Validations = require("../../validators");
const Suser = require("../../models/Security/Suser");
const CustomError = require("../../utils/customError");

class SuserController {
  async create (req, res) { 
   const validatedData = Validations.suser.validate(req.body);
   if (validatedData.error) throw res.status(422).send(validatedData);
  //  // save In Db 
   const result = await new Suser(validatedData).save();
   if (!result) throw res.status(422).send(result);
  res.status(200).send(response(STRINGS.TEXTS.SUserCreated, result));
  }

  async getAll (req, res) {   
   //Find all
    const result = await Suser.find({}, { __v: 0 }); 

   res.status(200).send(response(STRINGS.TEXTS.GetAllSUser, result));
   }

   async getOne (req, res) {
    const id = req.params.id;
    // findOne 
    const result = await Suser.findOne({ _id: id }, { __v: 0 });
    if (!result) throw new CustomError(STRINGS.ERRORS.NOTFOUND);

    res.status(200).send(response(STRINGS.TEXTS.GetOneSUser, result));
  }
  async delete (req, res) {
    const id = req.params.id;
    // delete
    const result = await Suser.findByIdAndDelete(id);

    res.status(200).send(response(STRINGS.TEXTS.SUserDeleted , result));
  }
  async Update (req, res) {   
    const id = req.params.id;
    // validation 
    const validatedData = Validations.suser.validate(req.body);
    if (validatedData.error) throw res.status(422).send(validatedData);  
    // findAndUpdate
    const result = await Suser.findByIdAndUpdate(
        { _id: id },
        { $set: validatedData },
        { new: true }
      );
    if(!result) throw res.status(422).send(STRINGS.ERRORS.NOTUPDATE);  
   res.status(200).send(response(STRINGS.TEXTS.SUserUpdate, result));
   }
}

module.exports = new SuserController();