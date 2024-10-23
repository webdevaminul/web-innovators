const express = require("express");
const router = express.Router();
const { allCourse, availableCourse, updateCourse, deleteCourse, testCreateCourse, createCourse } = require("../controllers/course.controller");
const { uploadImage ,uploadFiles} = require("../middleware/imgVdoUpload");



router.post("/create",uploadFiles, createCourse)
router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin
router.put("/courses/:id", updateCourse); // approved course to admin
router.delete('/courses/:id', deleteCourse);; // deleted course by teacher


module.exports = router;
