const { client } = require("../config/mongoDB");

const database = client.db("LearnUp");
const enrollCollection = database.collection("enrollCollection");

exports.enrolledCourse = async (req, res, next) => {
    try {
        const result = await enrollCollection.find().toArray();
        return res.status(200).json({
            success: true,
            message: "Enrolled courses fetched successfully",
            result,
        });
    } catch (error) {
        next(error); // Pass error to the error-handling middleware
    }
};
