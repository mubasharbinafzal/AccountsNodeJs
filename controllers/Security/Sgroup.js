const STRINGS = require("../../utils/texts"); 
const response = require("../../utils/response");
const Sgroup = require("../../models/Security/Sgroup");

class SgroupController {
  async create(req, res) {  
   const body = req.body;  
   const result = await new Sgroup(body).save();
    
  res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, result));
  }
}

module.exports = new SgroupController();