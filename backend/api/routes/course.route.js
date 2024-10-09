const express = require("express");
const multer = require("multer")
const router = express.Router();
const upload = require("../utilities/imageUp")
const { createCourse } = require("../controllers/course.controller");

// POST request to create a new course courseRoutes

// Route for creating a course with image upload
// router.post("/create", createCourse);
router.post("/course", (req, res, next) => {
    upload.single("coverPicture")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer-specific errors (like file too large)
        return res.status(400).send({ error: err.message });
      } else if (err) {
        // General error
        return res.status(400).send({ error: err.message });
      }
      next(); // Proceed to the controller if no errors
    });
  }, createCourse);

module.exports = router;
