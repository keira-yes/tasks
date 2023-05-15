const express = require("express");
const router = express.Router();
const { authToken } = require("../middleware/authToken");
const { registerUser, loginUser, getCurrentUser } = require("../controllers/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/current", authToken, getCurrentUser);

module.exports = router;