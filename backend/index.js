const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectDB, client } = require("./api/config/mongoDB");
const testRoutes = require("./api/routes/test.route");
const authRoutes = require("./api/routes/auth.route");
const courseRoutes = require("./api/routes/course.route");
const coursesRoutes = require("./api/routes/course.route");
const userRoutes = require("./api/routes/user.route");
const errorMiddleware = require("./api/middleware/errorMiddleware");
const instructorRoutes = require("./api/routes/instructor.route");
const allUser = require("./api/routes/instructor.route")

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

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

// Connect to MongoDB
connectDB();

const database = client.db("LearnUp");
const usersCollection = database.collection("users");

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

// Routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/be", instructorRoutes);
app.use("/aproved", instructorRoutes);
app.use("/all", coursesRoutes)  // all courses get
app.use("/get", allUser)  // all user get
app.use("/create", upload.single("coverPicture"), courseRoutes);

// Custom error handling middleware
app.use(errorMiddleware);

// Root route
app.get("/", (req, res) => {
  res.send("LearnUP server is running fine");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
