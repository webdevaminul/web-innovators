
const express = require("express");
const { enrolledCourse } = require("../controllers/enrolled.controller");
const router = express.Router();


router.get("/courses", enrolledCourse)

module.exports = router;