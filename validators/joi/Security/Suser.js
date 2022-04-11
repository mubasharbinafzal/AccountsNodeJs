const Joi = require("joi");
const STRINGS = require("../../../utils/texts");
const CustomError = require("../../../utils/customError");

const schemas = {
    validate: (data) => {
    const Validation = Joi.object().keys({ 
      grpId: Joi.string().required(),
      userName:Joi.string().min(3).max(25).required(),
      userPassw:Joi.string().min(3).max(15).required(), 
      userCPassw:Joi.string().min(3).max(15).required(), 
      userType:Joi.string().required(),
      userSnap: Joi.string().optional().allow(''),
    });
    const { error, value } = Validation.validate(data); 
    if (error) {  
      const { details } = error;
      const message = details.map((i) => i.message).join(",");  
        return {
            error: 422,
            message:message,
            success:false
        }
    }
    return value;
  },
  update: (data) => {
    const Validation = Joi.object().keys({ 
      grpId: Joi.string().required(),
      userName:Joi.string().min(3).max(25).required(),
      userPassw:Joi.string().min(3).max(15).optional().allow(''), 
      userCPassw:Joi.string().min(3).max(15).optional().allow(''), 
      userType:Joi.string().required(),
      userSnap: Joi.string().optional().allow(''),
    });
    const { error, value } = Validation.validate(data); 
    if (error) {  
      const { details } = error;
      const message = details.map((i) => i.message).join(",");  
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