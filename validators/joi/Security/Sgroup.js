const Joi = require("joi");
const STRINGS = require("../../../utils/texts");
const CustomError = require("../../../utils/customError");

const schemas = {
    validate: (data) => {
    const Validation = Joi.object().keys({ 
        grpTitle: Joi.string().min(3).max(25).required().label('Group Title')  
       
    }); 
    const { error, value } = Validation.validate(data); 
    if (error) { 
      const { details } = error;
      const message = details.map((i) => i.message).join(",").replace(/\"/gi, '');    
        return {
            error: 422,
            message:message,
            success:false
        }
    }
    return value;
  },
 
};

module.exports = schemas;