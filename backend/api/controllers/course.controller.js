const { client } = require("../config/mongoDB");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
  try {
    const courseData = JSON.parse(req?.body?.courseData);
    // File uploaded by multer
    const coverPicture = req.file; // This will contain the uploaded file information

    if (!coverPicture) {
      return res.status(400).json({ message: "Cover picture is required!" });
    }

    // Other form fields from req.body
    const { name, email, title, price, status, category, detailsCourse } =
      courseData;

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
    const{ status} = req?.query;
    console.log(' 112',status)

    let courses;
    
    if (status === 'pending') {
      courses = await courseCollection.find({ status: 'pending' }).toArray();
    } else if (status === 'approved') {
      courses = await courseCollection.find({ status: 'approved' }).toArray();
    } else {
      courses = await courseCollection.find().toArray();
    }

    // const courses = await courseCollection.find().toArray();
    if (!courses.length) {
      return res.status(404).json({
        success: false,
        message: "No courses found",
      });
    }

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
