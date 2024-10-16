const express = require("express");
const router = express.Router();
const { createCourse, allCourse } = require("../controllers/course.controller");
const upload = require("../middleware/imageUpload");

// Route for creating a course with image upload
router.post("/course", upload.single("coverPicture"), createCourse);

router.get("/courses", allCourse);

module.exports = router;
