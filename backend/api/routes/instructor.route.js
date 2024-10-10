const express = require("express");
const router = express.Router();
const { beInstructor ,approvedInstructor ,getAllUser} = require("../controllers/instructor.controller");

router.put("/instructor/:id", beInstructor);
router.put("/teaccher/:id", approvedInstructor);
router.get("/users", getAllUser)

module.exports = router;