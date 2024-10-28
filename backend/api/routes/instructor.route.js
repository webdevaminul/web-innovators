const express = require("express");
const router = express.Router();
const { beInstructor ,approvedInstructor , getAllTeacher, getAllUser} = require("../controllers/instructor.controller");

router.put("/instructor/:id", beInstructor);
router.put("/teacher/:id", approvedInstructor);
router.get("/teacher", getAllTeacher)
router.get("/user", getAllUser)

module.exports = router;