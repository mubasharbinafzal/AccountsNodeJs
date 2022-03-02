const STRINGS = require("../../utils/texts"); 
const Sgroup = require("../../models/Security/Sgroup");

class SgroupController {
  async create(req, res) {  
   const responseData = req.body;  
    
  res.status(200).send(response(STRINGS.TEXTS.SgroupCreated, responseData));
  }
}

module.exports = new SgroupController();