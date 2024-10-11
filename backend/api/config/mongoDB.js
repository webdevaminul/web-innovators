// api/config/mongoDB.js
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// MongoDB URI from .env file
const uri = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function to connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Atlas connected successfully!");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
}

module.exports = { connectDB, client };
