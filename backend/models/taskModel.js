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
            enum: ["development", "languages", "sports"]
        },
        description: {
            type: String,
            required: [true, "Please add description of your tasks"]
        },
        status: {
            type: String,
            required: true,
            enum: ["new", "done"],
            default: "new"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Task', taskSchema);