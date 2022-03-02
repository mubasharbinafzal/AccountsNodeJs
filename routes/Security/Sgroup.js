const router = require("express").Router();
// const auth = require("../middlewares/auth");
const SgroupController = require("../../controllers/Security/Sgroup");

router.get("/", SgroupController.create);

module.exports = router;