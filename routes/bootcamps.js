const { Router } = require("express");
const router = Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require("../controllers/bootcampController");

router.get("/", getBootcamps);
router.get("/:id", getBootcamp);
router.post("/", createBootcamp);
router.put("/:id", updateBootcamp);
router.delete("/:id", deleteBootcamp);

module.exports = router;
