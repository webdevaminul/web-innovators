const { client, ObjectId } = require("../config/mongoDB");
const database = client.db("LearnUp");
const courseCollection = database.collection("courses");

// Create a course
exports.createCourse = async (req, res, next) => {
  try {
    /* 
    <------------ Important To Do For organize ------------>
    1. Have to do user & email explicit and other course details will be one object under the user.
    2. If same user create another course then save it anoher object under the same user 
    3. For same user need to find existing user or not, if exiting then update and add new course object
    4. If user new then create another object and same like the before user
    5. In this situation find the specific course under the user (tricky part)
    */
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

    const imageUrl = req?.files?.image ? req?.files?.image[0].path : null;
    const videoUrls = req?.files?.video ? req?.files?.video?.map(file => file.path) : [];

    const newCourse = {
      name,
      email,
      title,
      price,
      oldPrice,
      status,
      category,
      detailsCourse,
      coverPicture: imageUrl,
      videoUrl: videoUrls,
    };

    // Insert the course data into the MongoDB collection
    const result = await courseCollection.insertOne(newCourse);

    // Success response
    return res.status(201).json({
      message: "Course created successfully!",
      courseId: result?.insertedId,
      course: newCourse,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
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

    if (!courses.length) {
      return res
        .status(404)
        .json({ success: false, message: "No courses found", data: [] });
    }

    // Send response if courses are found
    return res.status(200).json({
      success: true,
      data: courses,
      currentPage,
      totalPages,
      totalCourses, // Total number of courses for client to know
    });
  } catch (error) {
    return res.status(500).json({
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
    return res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    return res.status(500).json({
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
    return res.status(200).json({
      message: `This course has been ${updateStatus} successfully!`,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    next(error);
  }
};

// update course by teacher all details 
exports.updateCourseDetails = async (req, res, next) => {
  try {
    const id = req?.params.id;
    const query = { _id: new ObjectId(id) };
    const data = req?.body;
    const { title, price, oldPrice, category, description } = data;

    const updateDoc = {
      $set: {
        title: title,
        price: price,
        oldPrice: oldPrice,
        category: category,
        description: description
      },
    };

    const result = await courseCollection.updateOne(query, updateDoc);
    return res.status(200).json({
      message: `This course has been updated successfully!`,
      result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
    next(error);
  }
}

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
