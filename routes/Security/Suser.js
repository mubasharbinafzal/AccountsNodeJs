const router = require("express").Router();
// const auth = require("../middlewares/auth");
const upload = require("../../middlewares/multer");
const SuserController = require("../../controllers/Security/Suser");

router.post("/", upload("Suser", "userSnap"), SuserController.create); 
router.get("/", SuserController.getAll);
router.get("/:id", SuserController.getOne);
router.delete("/:id", SuserController.delete);
router.put("/:id", SuserController.Update);

module.exports = router;