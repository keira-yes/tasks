const express = require("express");
const router = express.Router();
const { authToken } = require("../middleware/authToken");
const { getTasks, createTask, getTask, updateTask, deleteTask } = require("../controllers/taskController");

router.route("/")
    .get(authToken, getTasks)
    .post(authToken, createTask);

router.route("/:id")
    .get(authToken, getTask)
    .put(authToken, updateTask)
    .delete(authToken, deleteTask);

module.exports = router;