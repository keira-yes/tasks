const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const Task = require("../models/taskModel");

// @desc   Get tasks
// @route  GET /api/tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
});

// @desc   Create new task
// @route  POST /api/tasks
// @access Private
const createTask = asyncHandler(async (req, res) => {
    const { category, description } = req.body;

    if (!category || !description) {
        res.status(400);
        throw new Error("Please add category and description");
    }

    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const task = await Task.create({
        user: req.user.id,
        category,
        description,
        status: "new"
    });

    res.status(201).json(task);
});

module.exports = {
    getTasks,
    createTask
}
