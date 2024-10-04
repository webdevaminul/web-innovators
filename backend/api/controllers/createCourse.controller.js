const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
    try {
      const courseData = req.body;  // Getting the course data from the request body
      console.log("Received Course Data:", courseData);
  
      // Insert the course data into the MongoDB collection
    //   const result = await courseCollection.insertOne(courseData);
  
      // Respond with the inserted data
    //   res.status(200).json({
    //     message: "Course created successfully",
    //     courseId: result.insertedId,  // Sending the inserted course ID as part of the response
    //   });
    } catch (error) {
      // Passing error to error handling middleware
      next(error);
    }
  };