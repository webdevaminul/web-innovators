const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/mongoDB");
const testRoutes = require("./routes/test.route");
const authRoutes = require("./routes/auth.route");
const errorMiddleware = require("./middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
app.use(express.json()); // To parse JSON
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  })
); // Enable CORS

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);

// Custom error handling middleware
app.use(errorMiddleware);

// Test route
app.get("/", (req, res) => {
  res.send("LearnUP server is running fine");
});

// Listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
