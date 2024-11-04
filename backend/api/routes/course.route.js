const express = require("express");
const router = express.Router();
const { allCourse, availableCourse, updateCourse, deleteCourse, createCourse, updateCourseDetails } = require("../controllers/course.controller");
const { upload } = require("../middleware/imgVdoUpload");



router.post("/create", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "video", maxCount: 10 },
]), createCourse)

router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin
router.put("/courses/:id", updateCourse); // approved course to admin
router.put("/update/:id", updateCourseDetails); // update course detailes by teacher
router.delete('/delete/:id', deleteCourse);; // deleted course by teacher


module.exports = router;
