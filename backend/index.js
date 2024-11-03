// Your main server file
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB, client, ObjectId } = require("./api/config/mongoDB");
const authRoutes = require("./api/routes/auth.route");
const coursesRoutes = require("./api/routes/course.route");
const enrolledRoutes = require("./api/routes/enrolled.route")

const userRoutes = require("./api/routes/user.route");
const allUser = require("./api/routes/instructor.route");
const allTeacher = require("./api/routes/instructor.route");
const instructorRoutes = require("./api/routes/instructor.route");
const blogRoutes = require("./api/routes/blog.route");

// Load environment variables
dotenv.config();

// for ssl commerze needy .env
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = process.env.NODE_ENV === "development" ? false : true; //true for live, false for sandbox

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
app.use("/approve", coursesRoutes); // approve courses from admin
app.use("/course", coursesRoutes);

// enrolled courses
app.use("/enrolled", enrolledRoutes)

app.use("/blog", blogRoutes);
app.use("/get", allTeacher); // all teaacher get
app.use("/get", allUser); // all user get for admin

// --------------------------post route for enrollment--------------------------
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");
const enrollCollection = database.collection("enrollCollection");
// generating transaction ID for student
const tran_id = new ObjectId().toString();

app.post("/enroll", async (req, res) => {
  const enroll = req?.body;
  const courseId = req?.body?.courseId;
  // specific course getting here
  const course = await courseCollection.findOne({
    _id: new ObjectId(courseId),
  });

  const teacherName = course.name;
  const teacherEmail = course.email;

  const data = {
    total_amount: course.price,
    currency: "BDT",
    courseId: course._id,
    tran_id: tran_id, // use unique tran_id for each api call
    success_url: `${process.env.SERVER_API}/enroll/success/${tran_id}`,
    fail_url: `${process.env.SERVER_API}/enroll/fail/${tran_id}`,
    cancel_url: `${process.env.SERVER_API}/enroll/cancel/${tran_id}`,
    ipn_url: `${process.env.SERVER_API}/enroll/ipn/${tran_id}`,
    shipping_method: "Courier",
    product_name: " ",
    product_category: " ",
    product_profile: " ",
    cus_name: " ",
    cus_email: enroll.studentEmail,
    cus_add1: " ",
    cus_add2: " ",
    cus_city: " ",
    cus_state: " ",
    cus_postcode: " ",
    cus_country: " ",
    cus_phone: " ",
    cus_fax: " ",
    ship_name: " ",
    ship_add1: " ",
    ship_add2: " ",
    ship_city: " ",
    ship_state: " ",
    ship_postcode: " ",
    ship_country: " ",
    course_name: course.title,
    course_category: course.category,
    course_banner: course.coverPicture,
    teacher_name: teacherName,
    teacher_email: teacherEmail,
    student_name: enroll.name,
    student_email: enroll.studentEmail,
    student_add1: enroll.address,
    cus_country: "Bangladesh",
    student_phone: enroll.phone,
    // custom info u can add
  };
  // console.log(data);

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse) => {

    // Redirect the user to payment gateway
    let GatewayPageURL = apiResponse.GatewayPageURL;

    // sending url to redirect in frontend
    res.send({ url: GatewayPageURL });

    // this is the final data to store in database
    const finalEnroll = {
      paidStatus: false,
      transaction: tran_id,
      data,
    };
    // inserting data on database
    const result = enrollCollection.insertOne(finalEnroll);
    res.status(200).json({
      success : true,
      message : "You enrolled successfully",
      result
    })
  });

  // hitting on a route for ensuring that the payment success routes
  app.post("/enroll/success/:tranId", async (req, res) => {
    const tranId = req?.params?.tranId;
    console.log(tranId);
    const result = await enrollCollection.updateOne(
      { transaction: tranId },
      {
        $set: {
          paidStatus: true,
        },
      }
    );
    if (result.modifiedCount > 0) {
      res.redirect(`${process.env.CLIENT_API}`);
    }
  });

  // payment fail routes
  app.post("/enroll/fail/:tranId", async (req, res) => {
    const tranId = req.params.tranId;
    const result = await enrollCollection.deleteOne({ transaction: tranId });

    if (result.deletedCount) {
      res.redirect(`${process.env.CLIENT_API}`);
    }
  });
});

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
