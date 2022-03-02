const STRINGS = require("../../utils/texts"); 
const response = require("../../utils/response");
const Validations = require("../../validators");
const Sgroup = require("../../models/Security/Sgroup");

class SgroupController {
  async create(req, res) {   
   const validatedData = Validations.sgroup.create(req.body);

   console.log(validatedData);
//    const result = await new Sgroup(validatedData).save();
//    if (!result) throw new CustomError(result, 404);
   res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, validatedData));
  }
}

module.exports = new SgroupController();