const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

// Load environment variables from.env file
dotenv.config();

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();

    // Success connection message if connection is successful
    console.log("MongoDB Atlas connected successfully!");
  } catch (err) {
    // Error connection message if connection fails
    console.error("MongoDB connection failed:", err);
  }
}
connectDB().catch(console.dir);

// Export the client and run function
module.exports = { client, connectDB };
