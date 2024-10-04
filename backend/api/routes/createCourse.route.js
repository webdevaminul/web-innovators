const express = require("express");
const router = express.Router();
const { createCourse } = require("../controllers/createCourse.controller");

// POST request to create a new course courseRoutes
router.post("/course", createCourse);  // Updated to match "/api/create/course"

module.exports = router;
