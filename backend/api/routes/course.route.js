const express = require("express");
const router = express.Router();
const { allCourse, availableCourse, updateCourse, deleteCourse } = require("../controllers/course.controller");
const upload = require("../middleware/imageUpload");

router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin
router.put("/courses/:id", updateCourse); // approved course to admin
router.delete('/courses/:id', deleteCourse);; // deleted course by teacher

module.exports = router;
