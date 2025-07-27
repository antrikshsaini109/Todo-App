const express = require("express");
const { CreateTodo, UpdateTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());


app.get("/", function(req, res) {
  res.send("Hello, World!");
}); 

app.post("/todo",async function(req, res) {
  const createPayload = req.body;
  const parsePayload = CreateTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({ 
            msg: "sent wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created successfully"
    })
});

app.get("/todo",async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos
    });
});



app.put("/completed",async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = UpdateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({ 
            msg: "sent wrong input"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "marked as completed successfully"
    });
});

app.listen(3000);