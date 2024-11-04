const { client, ObjectId } = require("../../api/config/mongoDB");
const database = client.db("LearnUp");
const usersCollection = database.collection("users");

exports.beInstructor = async (req, res, next) => {
  try {
    const instructorId = req.params.id; // Get the instructor ID from the URL
    const instructorData = req.body;
    const query = { _id: new ObjectId(instructorId) };
    const option = { upsert: true };
    const updateDoc = {
      $set: {
        status: instructorData.status,
        institute: instructorData.institute,
        message: instructorData.message,
        category: instructorData.selectedOption,
        teacherJoinMonth : instructorData.teacherJoinMonth,
      },
    };
    // Update the instructor using native MongoDB methods
    const result = await usersCollection.updateOne(query, updateDoc, option);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Instructor not found" });
    }

    return res.status(200).json({ message: "Instructor updated successfully" });
  } catch (error) {
    next(error);
  }
};

exports.approvedInstructor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const aprovedStatus = req.body;
    const updateDoc = {
      $set: {
        status: aprovedStatus.status,
        userRole: aprovedStatus.userNewRole,
      },
    };
    const result = await usersCollection.updateOne(query, updateDoc);
    return res.status(200).json({
      message: "Congratulations, You are Teacher now !!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllTeacher = async (req, res, next) => {
  try {
    const status = req?.query?.status || { $exists: true };
    const query = { status: status };
    const users = await usersCollection.find(query).toArray();
    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }
    return res.status(200).json({
      success: true,
      data: users,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching users",
      error: error.message,
    });
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    //status: { $exists: false },
    const query = {  userRole: { $ne: "Admin" } }; // ne means not equal, it's mongodb operator
    const users = await usersCollection.find(query).toArray();
    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while fetching users",
      error: error.message,
    });
    next(error);
  }
};
