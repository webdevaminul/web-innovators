const express = require("express");
const { createTestPost } = require("../controllers/test.controller.js");
const router = express.Router();

router.post("/test", createTestPost);
router.get("/test-api", (req, res) => {
  return res.json({ success: true, message: `api is working` });
});

module.exports = router;
