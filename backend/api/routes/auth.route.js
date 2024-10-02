const express = require("express");
const { signup, emailVerify, signin } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", signup); // Handle user registration
router.get("/email-verify", emailVerify); // Handle email verification after user clicks the verification link
router.post("/signin", signin); // Handle user login

module.exports = router;
