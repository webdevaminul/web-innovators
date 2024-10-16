// Your main server file

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path")

const { connectDB } = require("./api/config/mongoDB");
const testRoutes = require("./api/routes/test.route");
const authRoutes = require("./api/routes/auth.route");
const blogRoutes = require("./api/routes/blog.route");
const courseRoutes = require("./api/routes/course.route");
const coursesRoutes = require("./api/routes/course.route");
const userRoutes = require("./api/routes/user.route");
const instructorRoutes = require("./api/routes/instructor.route");
const errorMiddleware = require("./api/middleware/errorMiddleware");
const instructorRoutes = require("./api/routes/instructor.route");
const allTeacher = require("./api/routes/instructor.route");
const allUser = require("./api/routes/instructor.route");
const { createCourse } = require("./api/controllers/course.controller");

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

// Connect to MongoDB
connectDB();

// Serve the "public/images" directory for uploaded images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// multer using for file upload
const folder = "./public/images";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folder); // Where to store the files
  },
  filename: (req, file, cb) => {
    // control file name like -> important file.png => important-file-time(forUni).png
    const fileExt = path.extname(file?.originalname);
    const fileName =
      (file.originalname
        ? file.originalname
            .replace(fileExt, "") // here your file name will be -> important file
            .toLowerCase()
            .split(" ") // split by spaces, split return array -> ['important', 'file']
            .join("-") // join with hyphen -> important-file
        : "unknown-file") + // if file name is nothing
      "-" +
      Date.now(); // Add timestamp nano-second -> important-file-123456
    cb(null, fileName + fileExt); // here filename and fileExt -> important-file-123456.png
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1 mb = 1000kb = 1000000 byte
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg, .png, or .jpeg formats are allowed!"));
    }
  },
});


// POST route to upload file and save data in MongoDB
app.post("/create/course", upload.single("coverPicture"), createCourse);

// Routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);
app.use("/be", instructorRoutes);
app.use("/aproved", instructorRoutes);
app.use("/all", coursesRoutes)  // all courses get
app.use("/get", allTeacher)  // all teaacher get
app.use("/get", allUser)  // all teaacher get


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
