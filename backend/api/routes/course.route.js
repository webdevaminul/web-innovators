const express = require("express");
const router = express.Router();
const multer = require("multer");
const { allCourse, availableCourse, updateCourse, deleteCourse, createCourse, testCreateCourse } = require("../controllers/course.controller");
const { uploadFiles, upload } = require("../middleware/imgVdoUpload");



router.post("/create/test", upload.fields([
  { name: "image", maxCount: 1 },
  { name: "video", maxCount: 10 },
]), testCreateCourse)

router.post("/create", uploadFiles, createCourse)
router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin
router.put("/courses/:id", updateCourse); // approved course to admin
router.delete('/courses/:id', deleteCourse);; // deleted course by teacher


module.exports = router;
