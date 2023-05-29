const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const Task = require("../models/taskModel");

// @desc   Get tasks
// @route  GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get tasks" });
});

// @desc   Create new task
// @route  POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {
    res.status(201).json({ message: "Create new task" });
});

module.exports = {
    getTasks,
    createTask
}