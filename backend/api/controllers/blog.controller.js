// api/controllers/blog.controller.js

const { client } = require("../config/mongoDB");
const { ObjectId } = require("mongodb");
const database = client.db("LearnUp");
const blogCollection = database.collection("blogPosts");

// Create a blog post
exports.createBlogPost = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded." });
    }

    const newPost = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: req.file.path,
      date: new Date(),
      photo: req.body.userProfilePicture || '', // Ensure a default value
      name: req.body.userName || '', // Ensure a default value
      email: req.body.userEmail || '', // Ensure a default value
      time: req.body.time || '', // Ensure a default value
      status: req.body.status || '', // Ensure a default value
    };
    

    const result = await blogCollection.insertOne(newPost);
    res.status(201).json({
      message: "Blog post created successfully!",
      postId: result.insertedId,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Get all blog posts
exports.getAllBlogPosts = async (req, res, next) => {
  try {
    const posts = await blogCollection.find().toArray();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Get a blog post by ID
exports.getBlogPostById = async (req, res, next) => {
  try {
    const blogPost = await blogCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json(blogPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


exports.updateBlogPost = async (req, res) => {
  try {
    const { title, description, category, image, date, name, email, time } = req.body;

    const updatedPost = await blogCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { title, description, category, image, date, name, email, time } },
      { returnOriginal: false }
    );

    if (!updatedPost.value) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(updatedPost.value);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update the blog post" });
  }
};



// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  try {
    const result = await blogCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete the blog post" });
  }
};



// Update blog post status
exports.updateBlogPostStatus = async (req, res) => {
  try {
    const result = await blogCollection.findOneAndUpdate(
      { _id: new ObjectId(req.params.id) },
      { $set: { status: req.body.status } },
      { returnOriginal: false }
    );

    if (!result.value) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(result.value);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update the blog post status" });
  }
};