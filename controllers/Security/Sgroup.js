const STRINGS = require("../../utils/texts"); 
const response = require("../../utils/response");
const Validations = require("../../validators");
const Sgroup = require("../../models/Security/Sgroup");
const CustomError = require("../../utils/customError");

class SgroupController {
  async create(req, res) {   
   const validatedData = Validations.sgroup.create(req.body); 

   
   const result = await new Sgroup(validatedData).save(); 
   res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, result));
  }
}

module.exports = new SgroupController();