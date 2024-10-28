// api/middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.status || 500;
  const response = {
    success: false,
    message: err.message || "Server Error",
  };

  if (process.env.NODE_ENV === "development") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
