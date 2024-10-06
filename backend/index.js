const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./api/config/mongoDB"); // Import connection function
const testRoutes = require("./api/routes/test.route");
const authRoutes = require("./api/routes/auth.route");
const errorMiddleware = require("./api/middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://web-innovators-learnup.vercel.app"], // Frontend origin
    credentials: true, // Allow cookies to be sent
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly allow methods
  })
);

// Connect to MongoDB
connectDB();

// Routes
app.use("/test", testRoutes);
app.use("/auth", authRoutes);

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
