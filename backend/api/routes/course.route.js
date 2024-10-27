const express = require("express");
const router = express.Router();
const { allCourse, availableCourse, updateCourse, deleteCourse, createCourse, testCreateCourse } = require("../controllers/course.controller");
const { uploadFiles} = require("../middleware/imgVdoUpload");
const multer = require("multer");



router.post("/create",uploadFiles, createCourse)
router.post("/testCreate",uploadFiles, testCreateCourse)
router.get("/available", availableCourse); // available course for user, student and teacher
router.get("/courses", allCourse); // all course for admin
router.put("/courses/:id", updateCourse); // approved course to admin
router.delete('/courses/:id', deleteCourse);; // deleted course by teacher




const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCloudinary(req.file.path);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({ success: false, message: "Error uploading file" });
  }
});


module.exports = router;
