// api/routes/blog.route.js
const express = require("express");
const { uploadImage } = require("../middleware/imgVdoUpload");
const { getAllBlogPosts, getBlogPostById, updateBlogPost,deleteBlogPost,updateBlogPostStatus, createBlogPost } = require("../controllers/blog.controller");

const router = express.Router();

router.post("/createBlog",uploadImage, createBlogPost); // all blog post get from here for admin
router.get("/allBlogPosts", getAllBlogPosts); // all blog post get from here for admin
router.get("/allBlogPosts/:id", getBlogPostById);
router.put("/updateBlogPost/:id", updateBlogPost);
router.delete("/deleteBlogPost/:id", deleteBlogPost); // Add this line for the delete route
router.put("/updateStatus/:id", updateBlogPostStatus); // Route for updating blog post status


module.exports = router;
