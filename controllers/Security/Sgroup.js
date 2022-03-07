const STRINGS = require("../../utils/texts"); 
const response = require("../../utils/response");
const Validations = require("../../validators");
const Sgroup = require("../../models/Security/Sgroup");
const CustomError = require("../../utils/customError");

class SgroupController {
  async create(req, res) {   
   const validatedData = Validations.sgroup.validate(req.body); 
   if (validatedData.error) throw res.status(422).send(validatedData);
  const result = await new Sgroup(validatedData).save(); 
  res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, result));
  }

  async getAll(req, res) {   
   const result = await Sgroup.find({}, { __v: 0 }); 
   res.status(200).send(response(STRINGS.TEXTS.GetAllSgroup, result));
   }

   async getOne(req, res) {
    const id = req.params.id;

    const result = await Sgroup.findOne({ _id: id }, { __v: 0 });
    if (!result) throw new CustomError(STRINGS.ERRORS.NOTFOUND);

    res.status(200).send(response(STRINGS.TEXTS.getOne, result));
  }
  async delete(req, res) {
    const id = req.params.id;

    const result = await Sgroup.findByIdAndDelete(id);

    res.status(200).send(response(STRINGS.TEXTS.SgroupDeleted , result));
  }
  async Update(req, res) {   
    const id = req.params.id;
    const validatedData = Validations.sgroup.validate(req.body); 
    if (validatedData.error){
     res.status(422).send(validatedData);
    } 
    const result = await Sgroup.findByIdAndUpdate(
        { _id: id },
        { $set: validatedData },
        { new: true }
      );
    if(!result) throw res.status(422).send(STRINGS.ERRORS.NOTUPDATE);  
   res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, result));
   }
}

module.exports = new SgroupController();
