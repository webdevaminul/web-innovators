const express = require("express");
const router = express.Router();
const { beInstructor ,approvedInstructor , getAllTeacher} = require("../controllers/instructor.controller");

router.put("/instructor/:id", beInstructor);
router.put("/teacher/:id", approvedInstructor);
router.get("/teacher", getAllTeacher)

module.exports = router;