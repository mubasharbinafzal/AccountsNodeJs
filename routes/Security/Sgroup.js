const router = require("express").Router();
// const auth = require("../middlewares/auth");
const SgroupController = require("../../controllers/Security/Sgroup");

router.post("/", SgroupController.create);

module.exports = router;