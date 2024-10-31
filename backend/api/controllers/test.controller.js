const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const testCollection = database.collection("test");

// Create a post
exports.createTestPost = async (req, res, next) => {
  try {
    const newPost = req.body;
    const result = await testCollection.insertOne(newPost);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
