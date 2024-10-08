const express = require("express");
const router = express.Router();
const { createCourse } = require("../controllers/createCourse.controller");

// POST request to create a new course courseRoutes
// router.post("/create/course", createCourse);  // Updated to match "/api/create/course"
router.post("/create/course", async(req , res) => {
console.log('api folder', req.body)
});

module.exports = router;
