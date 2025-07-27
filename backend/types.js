const zod = require('zod');
const { z } = zod;

const CreateTodo = z.object({
    title: z.string(),
    description: z.string()
});

const UpdateTodo = z.object({
     id: z.string(),
    completed: z.boolean()
});

module.exports = {
    CreateTodo, 
    UpdateTodo
};