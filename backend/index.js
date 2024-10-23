// Your main server file

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const path = require("path");

const { connectDB, ObjectId } = require("./api/config/mongoDB");
const testRoutes = require("./api/routes/test.route");
const authRoutes = require("./api/routes/auth.route");
const coursesRoutes = require("./api/routes/course.route");
const userRoutes = require("./api/routes/user.route");
const errorMiddleware = require("./api/middleware/errorMiddleware");

const allUser = require("./api/routes/instructor.route");
const allTeacher = require("./api/routes/instructor.route");
const instructorRoutes = require("./api/routes/instructor.route");

const blogRoutes = require("./api/routes/blog.route");

const { createCourse } = require("./api/controllers/course.controller");
const { createBlogPost } = require("./api/controllers/blog.controller");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
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
// connectDB();

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
    fileSize: 2000000, // 1 mb = 1000kb = 1000000 byte
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
app.post("/blog/createBlog", upload.single("blogImage"), createBlogPost);

// Routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.use("/be", instructorRoutes);
app.use("/approved", instructorRoutes);

app.use("/all", coursesRoutes); // all courses get for admin
app.use("/courses", coursesRoutes); // all courses get for user, teacher and student
app.use("/delete", coursesRoutes); // delete course by teacher
app.use("/approve", coursesRoutes); // approve courses from admin

app.use("/blog", blogRoutes);

app.use("/get", allTeacher); // all teaacher get
app.use("/get", allUser); // all user get for admin

// -------------------post route for enrollment--------------------------
// generating transaction ID for student
const tran_id = new ObjectId().toString();

app.post("/enroll", async (req, res) => {
  const enroll = req.body;
  // specific course getting here
  // const course = await courseCollection.findOne({
  //   _id: new ObjectId(req.body.courseId),
  // });
  // console.log(course);
  // console.log(course.price);
  const data = {
    total_amount: "wll be the price course.price",
    currency: "BDT",
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: "http://localhost:3030/success",
    fail_url: "http://localhost:3030/fail",
    cancel_url: "http://localhost:3030/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "",
    product_name: enroll.courseTitle,
    product_category: "Electronic",
    product_profile: "general",
    cus_name: enroll.name,
    cus_email: enroll.studentEmail,
    cus_add1: enroll.address,
    cus_add2: "",
    cus_city: "",
    cus_state: "",
    cus_postcode: "",
    cus_country: "Bangladesh",
    cus_phone: enroll.phone,
    cus_fax: "",
    ship_name: "",
    ship_add1: "",
    ship_add2: "",
    ship_city: "",
    ship_state: "",
    ship_postcode: "",
    ship_country: "Bangladesh",
  };
  // const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  // sslcz.init(data).then((apiResponse) => {
  //   // Redirect the user to payment gateway
  //   let GatewayPageURL = apiResponse.GatewayPageURL;
  //   res.redirect(GatewayPageURL);
  //   console.log("Redirecting to: ", GatewayPageURL);
  // });
});

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
