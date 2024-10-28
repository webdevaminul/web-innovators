// api/controllers/blog.controller.js

const { client } = require("../config/mongoDB");
const { ObjectId } = require("mongodb");
const database = client.db("LearnUp");
const blogCollection = database.collection("blogs");

// Create a blog post
exports.createBlogPost = async (req, res, next) => {
  try {
    const {
      title,
      description,
      category,
      userPicture,
      userName,
      userEmail,
      time,
      status,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded." });
    }

    const newPost = {
      title,
      description,
      category,
      image: req.file.path,
      date: new Date(),
      photo: `/images/${userPicture?.filename},`,
      name: userName,
      email: userEmail,
      time,
      status,
    };
    const result = await blogCollection.insertOne(newPost);
    res.status(201).json({
      message: "Blog post created successfully!",
      message2: "Wait for admin approval",
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
    // Fetch all blog posts from the collection
    const allPosts = await blogCollection.find().toArray();

    // Respond with a success message and the fetched blog posts
    res.status(200).json({
      success: true,
      message: "Blog posts retrieved successfully",
      data: allPosts,
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);

    // Pass the error to the next middleware
    next(error);
  }
};

// Get a blog post by ID
exports.getBlogPostById = async (req, res, next) => {
  try {
    const blogPost = await blogCollection.findOne({
      _id: new ObjectId(req.params.id),
    });
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
    const { title, description, category, image, date, name, email, time } =
      req.body;
    const query = { _id: new ObjectId(req.params.id) };
    console.log("90 ", query);
    const updateDoc = {
      $set: { title, description, category, image, date, name, email, time },
    };

    const updatedPost = await blogCollection.updateOne(query,updateDoc);

    if (!updatedPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res
      .status(200)
      .json({
        message: "Blog post updated successfully",
        data: updatedPost,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update the blog post" });
  }
};

// Delete a blog post
exports.deleteBlogPost = async (req, res) => {
  try {
    const result = await blogCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

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
    const id = req?.params.id;
    const { status } = req?.body;
    const updateDoc = { $set: { status: status } };
    const query = { _id: new ObjectId(id) };
    const result = await blogCollection.updateOne(query, updateDoc);

    // Check if any documents were modified
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "Blog post status unchanged" });
    }

    res.status(200).json({
      message: "Blog approved successfully",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update the blog post status" });
  }
};
