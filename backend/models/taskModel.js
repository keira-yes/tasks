const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        category: {
            type: String,
            required: [true, "Please select category"],
            enum: ["Development", "Languages", "Sports"]
        },
        description: {
            type: String,
            required: [true, "Please add description of your task"]
        },
        status: {
            type: String,
            required: true,
            enum: ["new", "in progress", "done"],
            default: "new"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Task', taskSchema);