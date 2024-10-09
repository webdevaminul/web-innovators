const express = require("express");
const { userUpdate, changePassword, deleteAccount } = require("../controllers/user.controller");
const router = express.Router();

router.post("/update-profile/:id", userUpdate);
router.post("/change-password/:id", changePassword);
router.delete("/delete-account/:id", deleteAccount);

module.exports = router;
