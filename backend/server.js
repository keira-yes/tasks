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

app.get("/", (req, res) => {
    res.send("Tasks API");
});

// Routes
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/tasks", require("./routes/taskRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on ${PORT} port`));