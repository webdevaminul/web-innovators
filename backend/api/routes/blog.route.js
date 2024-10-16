// api/routes/blog.route.js
const express = require("express");
const multer = require("multer");
const { createBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPost,deleteBlogPost,updateBlogPostStatus } = require("../controllers/blog.controller");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

router.post("/createBlog", upload.single("image"), createBlogPost);
router.get("/allBlogPosts", getAllBlogPosts);
router.get("/allBlogPosts/:id", getBlogPostById);
router.put("/updateBlogPost/:id", updateBlogPost);
router.delete("/deleteBlogPost/:id", deleteBlogPost); // Add this line for the delete route
router.put("/updateStatus/:id", updateBlogPostStatus); // Route for updating blog post status


module.exports = router;
