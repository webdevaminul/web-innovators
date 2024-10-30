// Your main server file
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./api/config/mongoDB");
const authRoutes = require("./api/routes/auth.route");
const coursesRoutes = require("./api/routes/course.route");
const userRoutes = require("./api/routes/user.route");
const allUser = require("./api/routes/instructor.route");
const allTeacher = require("./api/routes/instructor.route");
const instructorRoutes = require("./api/routes/instructor.route");
const blogRoutes = require("./api/routes/blog.route");


// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware
const allowedOrigins =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://web-innovators-learnup.vercel.app";

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Handle preflight `OPTIONS` requests
app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Custom middleware to manually set CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", allowedOrigins);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
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

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/be", instructorRoutes);
app.use("/approved", instructorRoutes);

app.use("/all", coursesRoutes); // all courses get for admin
app.use("/courses", coursesRoutes); // all courses get for user, teacher and student
app.use("/delete", coursesRoutes); // delete course by teacher
app.use("/approve", coursesRoutes); // approve courses from admin
app.use("/course", coursesRoutes);

app.use("/blog", blogRoutes);
app.use("/get", allTeacher); // all teaacher get
app.use("/get", allUser); // all user get for admin

// Root route
app.get("/", (req, res) => {
  res.send("LearnUP server is running fine");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

module.exports = app;
