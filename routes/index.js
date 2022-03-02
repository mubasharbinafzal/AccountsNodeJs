const router = require("express").Router();
 
router.use("/v1/sgroup", require("./Security/Sgroup")); 

module.exports = router;