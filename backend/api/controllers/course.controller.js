const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
  console.log("8 api hit hoice");
  try {
    // Parse the course data sent as a string
    const courseData = JSON.parse(req.body.courseData); // Convert back to object
    console.log("11 controler course", courseData);

    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    // Get the image URL for storage or retrieval
    const imgUrl = `/images/${req.file.filename}`;

    // Create a new course object with the image URL
    const newCourse = {
      ...courseData,
      imageUrl: imgUrl, // include the image URL in the course data
    };

    // Insert the new course into the database
    const result = await courseCollection.insertOne(newCourse);

    // Send a success response
    res.status(200).send({
      message: "Course created and file uploaded successfully!",
      courseId: result.insertedId,
    });
  } catch (error) {
    res.status(500).send({ message: "Server error", error: error.message });
    next(error);
  }
};

exports.allCourse = async (req, res, next) => {
  try {
    const courses = await courseCollection.find().toArray();

    if (!courses.length) {
      return res.status(404).json({
        success: false,
        message: 'No courses found'
      });
    }

    res.status(200).json({
      success: true,
      data: courses
    });


  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching courses. Please try again later.'
    });
    next(error);
  }
};
