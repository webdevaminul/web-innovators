const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/mongoDB"); // Import connection function
const testRoutes = require("./routes/test.route");
const authRoutes = require("./routes/auth.route");
const errorMiddleware = require("./middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://web-innovators-learnup.vercel.app"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB()
  .then(() => {
    // Routes
    app.use("/api/test", testRoutes);
    app.use("/api/auth", authRoutes);

    // Custom error handling middleware
    app.use(errorMiddleware);

    // Root route
    app.get("/", (req, res) => {
      res.send("LearnUP server is running fine");
    });

    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
