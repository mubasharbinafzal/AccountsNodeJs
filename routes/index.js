const router = require("express").Router();
 
router.use("/v1/sgroup", require("./Security/Sgroup")); 
router.use("/v1/suser", require("./Security/Suser")); 

module.exports = router;