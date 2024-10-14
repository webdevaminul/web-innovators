const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
  console.log("8 api hit hoice");
  try {
    const courseData = JSON.parse(req.body.courseData);
    // File uploaded by multer
    const coverPicture = req.file; // This will contain the uploaded file information

    if (!coverPicture) {
      return res.status(400).json({ message: "Cover picture is required!" });
    }

    // Other form fields from req.body
    const {name,
      email,
      title,
      price,
      status,
      category,
      detailsCourse, } = courseData;

    // Prepare the course data
    const newCourse = {      
      name,
      email,
      title,
      price,
      status,
      category,
      detailsCourse,
      coverPicture: `/images/${coverPicture?.filename}`, // Store the uploaded filename in the database
    };

    // Insert the course data into the MongoDB collection
    const result = await courseCollection.insertOne(newCourse);

    // Success response
    res.status(201).json({
      message: "Course created successfully!",
      courseId: result.insertedId,
      course: newCourse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    next(error)
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
