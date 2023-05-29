const express = require("express");
const router = express.Router();
const { authToken } = require("../middleware/authToken");
const { getTasks, createTask } = require("../controllers/taskController");

router
    .get("/", authToken, getTasks)
    .post("/", authToken, createTask)

module.exports = router;