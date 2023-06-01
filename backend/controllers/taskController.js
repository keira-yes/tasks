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

// @desc   Get task
// @route  GET /api/tasks/:id
// @access Private
const getTask = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    res.status(200).json(task);
});

// @desc   Update task
// @route  PUT /api/tasks/:id
// @access Private
const updateTask = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedTask);
});

// @desc   Delete task
// @route  DELETE /api/tasks/:id
// @access Private
const deleteTask = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("User not found");
    }

    const task = await Task.findById(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error("Task not found");
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    await task.deleteOne();

    res.status(200).json({ success: true, message: "Task has been deleted" });
});

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
