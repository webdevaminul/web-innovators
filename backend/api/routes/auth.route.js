const express = require("express");
const {
  signup,
  emailVerify,
  signOut,
  signin,
  forgetPassword,
  recoverPassword,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", signup); // Handle user registration
router.get("/email-verify", emailVerify); // Handle email verification after user clicks the verification link
router.get("/sign-out", signOut); // Handle user sign-out
router.post("/signin", signin); // Handle user login
router.post("/forget-password", forgetPassword); // Handle user forget password
router.post("/recover-password", recoverPassword); // Handle user password recovery

module.exports = router;
