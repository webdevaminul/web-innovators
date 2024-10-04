const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
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
app.use(cookieParser()); // To parse cookies

// CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        "http://localhost:5173", // Localhost for development
        "https://web-innovators-learnup.vercel.app", // Production frontend
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Allow the request
      } else {
        callback(new Error("Not allowed by CORS")); // Deny the request
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allow preflight
    credentials: true, // Enable credentials
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    preflightContinue: false, // Respond to preflight automatically
    optionsSuccessStatus: 204, // Response status for successful OPTIONS
  })
);

// Handle preflight OPTIONS requests
app.options("*", cors());

// Connect to MongoDB Atlas
connectDB()
  .then(() => {
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

    app.use((req, res, next) => {
      console.log(`Incoming request: ${req.method} ${req.url} from origin: ${req.get("Origin")}`);
      next();
    });
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
  });
