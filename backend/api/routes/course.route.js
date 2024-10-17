const express = require("express");
const router = express.Router();
const { createCourse, allCourse, availableCourse } = require("../controllers/course.controller");
const upload = require("../middleware/imageUpload");

// Route for creating a course with image upload
router.post("/course", upload.single("coverPicture"), createCourse);
router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin

module.exports = router;
