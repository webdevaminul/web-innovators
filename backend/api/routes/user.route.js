const express = require("express");
const { userUpdate, changePassword, deleteAccount } = require("../controllers/user.controller");
const { verifyToken } = require("../utilities/verifyToken");
const router = express.Router();

router.post("/update-profile/:id", verifyToken, userUpdate);
router.post("/change-password/:id", verifyToken, changePassword);
router.delete("/delete-account/:id", verifyToken, deleteAccount);

module.exports = router;
