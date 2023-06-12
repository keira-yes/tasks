const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorHandler");

// Connect to DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/tasks", require("./routes/taskRoute"));

// Frontend in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => res.sendFile(__dirname, "../", "frontend", "build", "index.html"));
} else {
    app.get("/", (req, res) => {
        res.send("Tasks API");
    });
}

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));