// api/controllers/blog.controller.js
const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const blogCollection = database.collection("blogPosts");

// Create a blog post
exports.createBlogPost = async (req, res, next) => {
  try {
    const newPost = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: req.file.path, // Store the path of the uploaded file
      date: new Date(),
      userName: req.body.userName, // Assuming you have this in the request body
      userProfilePicture: req.body.userProfilePicture, // Assuming you have this in the request body
      time: req.body.time, // Assuming you have this in the request body
    };
    
    const result = await blogCollection.insertOne(newPost);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
