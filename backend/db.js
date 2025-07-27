
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model("todo", todoSchema);

module.exports = { todo };
