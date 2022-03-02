const Joi = require("joi");
const STRINGS = require("../../../utils/texts");
const CustomError = require("../../../utils/customError");

const schemas = {
  create: (data) => {
    const Validation = Joi.object().keys({ 
        grpTitle: Joi.string().min(10).max(25).required(), 
       
    }); 
    const { error, value } = Validation.validate(data);
    if (error) { 
      const { details } = error;
      const message = details.map((i) => i.message).join(","); 
      throw new CustomError(message,400);
    }
    return value;
  },
 
};
module.exports = schemas;