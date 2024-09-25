const express = require("express");
const { createTestPost } = require("../controllers/test.controller.js");
const router = express.Router();

router.post("/test", createTestPost);

module.exports = router;
