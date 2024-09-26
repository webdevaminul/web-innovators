const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const userCollection = database.collection("users");

// create api with export.api_function
