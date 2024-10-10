const express = require("express");
const router = express.Router();
const { beInstructor ,approvedInstructor} = require("../controllers/instructor.controller");
router.put("/instructor/:id", beInstructor);
router.put("/teaccher/:id", approvedInstructor);

module.exports = router;