// Your main server file

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectDB } = require("./api/config/mongoDB");
const testRoutes = require("./api/routes/test.route");
const authRoutes = require("./api/routes/auth.route");
const blogRoutes = require("./api/routes/blog.route");
const courseRoutes = require("./api/routes/course.route");
const userRoutes = require("./api/routes/user.route");
const instructorRoutes = require("./api/routes/instructor.route");
const errorMiddleware = require("./api/middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Middleware
const allowedOrigins = process.env.NODE_ENV === "development"
  ? "http://localhost:5173"
  : "https://web-innovators-learnup.vercel.app";

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);
app.use("/be", instructorRoutes);
app.use("/aproved", instructorRoutes);
app.use("/all", courseRoutes);

// Custom error handling middleware
app.use(errorMiddleware);

// Root route
app.get("/", (req, res) => {
  res.send("LearnUP server is running fine");
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

module.exports = app;
