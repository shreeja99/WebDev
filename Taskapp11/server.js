const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // serve index.html

mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

// Schema + Model (inside same file for simplicity)
const Task = mongoose.model("Task", {
    title: String
});

// GET tasks
app.get("/tasks", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// ADD task
app.post("/tasks", async (req, res) => {
    await Task.create({ title: req.body.title });
    res.send("Added");
});

app.listen(3000, () => console.log("Running"));