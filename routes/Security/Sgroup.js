const router = require("express").Router();
// const auth = require("../middlewares/auth");
const SgroupController = require("../../controllers/Security/Sgroup");

router.post("/", SgroupController.create);
router.get("/", SgroupController.getAll);
router.get("/:id", SgroupController.getOne);
router.delete("/:id", SgroupController.delete);
router.put("/:id", SgroupController.Update);

module.exports = router;