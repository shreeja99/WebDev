const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/tasks');

// Model
const Task = mongoose.model('Task', { name: String });

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// CREATE
app.post('/add', async (req, res) => {
    await Task.create({ name: req.body.task });
    res.redirect('/');
});

// READ
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

// DELETE
app.get('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

app.listen(3000, () => console.log("Running"));