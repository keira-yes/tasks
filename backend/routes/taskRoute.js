const express = require("express");
const router = express.Router();
const { authToken } = require("../middleware/authToken");
const { getTasks, createTask, getTask } = require("../controllers/taskController");

router.route("/")
    .get(authToken, getTasks)
    .post(authToken, createTask);

router.get("/:id", authToken, getTask);

module.exports = router;