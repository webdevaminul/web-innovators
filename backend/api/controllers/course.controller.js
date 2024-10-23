const { client, ObjectId } = require("../config/mongoDB");
const { uploadVideo, uploadImage } = require("../middleware/imgVdoUpload");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
  try {
    // here code
    const {
      name,
      email,
      title,
      price,
      oldPrice,
      status,
      category,
      detailsCourse,
    } = req.body;

    const image = req?.file?.path;
    const newCourse = {
      name,
      email,
      title,
      price,
      oldPrice,
      status,
      category,
      detailsCourse,
      coverPicture: image, // Store the uploaded filename in the database
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
    next(error);
  }
};

// available course for user, student and teacher
exports.availableCourse = async (req, res, next) => {
  try {
    const {
      sortOrder = "asc",
      page = 1,
      limit = 6,
      selectedCategory,
    } = req.query;

    const currentPage = parseInt(page, 10) || 1; // 10 for decimal
    const itemsPerPage = parseInt(limit, 10) || 6; // 10 for decimal
    const skip = (currentPage - 1) * itemsPerPage;

    // Initialize an empty object for sorting
    let sortOption = {};
    const query = {};
    // If sortOrder is provided, sort based on the price field
    sortOption.price = sortOrder === "asc" ? 1 : -1; // 1 for ascending, -1 for descending
    if (selectedCategory && selectedCategory !== "All") {
      query.category = selectedCategory;
    }
    // console.log("category 70", query);

    // Fetch total number of courses for pagination calculation
    const totalCourses = await courseCollection.estimatedDocumentCount();
    const totalPages = Math.ceil(totalCourses / itemsPerPage); // Total number of pages

    // Fetching the courses from the collection with sorting
    const courses = await courseCollection
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(itemsPerPage)
      .toArray();

    if (courses.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No courses found", data: [] });
    }

    // Send response if courses are found
    res.status(200).json({
      success: true,
      data: courses,
      currentPage,
      totalPages,
      totalCourses, // Total number of courses for client to know
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "An error occurred while fetching courses. Please try again later.",
    });
    next(error);
  }
};

// all course for admin maintain
exports.allCourse = async (req, res, next) => {
  try {
    const { status } = req?.query;

    let courses = [];
    if (status === "pending") {
      courses = await courseCollection.find({ status: "pending" }).toArray();
    } else {
      courses = await courseCollection
        .find({ status: { $ne: "pending" } })
        .toArray();
    }

    // Always return a valid response with an array
    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "An error occurred while fetching courses. Please try again later.",
    });
    next(error);
  }
};

// update course for user teacher and student
exports.updateCourse = async (req, res, next) => {
  const id = req?.params.id;
  const { updateStatus } = req.body;
  const query = { _id: new ObjectId(id) };
  try {
    const updateDoc = {
      $set: {
        status: updateStatus,
      },
    };
    const result = await courseCollection.updateOne(query, updateDoc);
    res.status(200).json({
      message: `This course has been ${updateStatus} successfully!`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error);
  }
};

// Delete a course by teacher
exports.deleteCourse = async (req, res, next) => {
  const { id } = req.params;
  const query = { _id: new ObjectId(id) };

  try {
    const result = await courseCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      res.status(200).json({
        message: "Course deleted successfully!",
      });
    } else {
      res.status(404).json({
        message: "Course not found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting course",
      error: error.message,
    });
    next(error);
  }
};

// Create a new course with multiple videos and an image

exports.testCreateCourse = async (req, res, next) => {
  try {
    // here code
    const { name, email, title, price, status, category, detailsCourse } =
      req.body;

    const image = req?.file?.path;

    // Handle the videos (req.files for multiple video uploads)
    const videoUrls = req?.files.map((file) => file.path);
    console.log(videoUrls);

    console.log("Course-Data:", req.body);
    const newCourse = {
      name,
      email,
      title,
      price,
      status,
      category,
      detailsCourse,
      coverPicture: image, // Store the uploaded filename in the database
      videoUrl: videoUrls,
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
    console.error("Error creating course:", error);
    res
      .status(500)
      .json({ message: "Error creating course", error: error.message });
  }
};
