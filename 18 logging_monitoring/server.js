import express from 'express';
import {todoFunction} from "./todoFunction.js";

const app = express();
app.use(express.json());

app.post('/todos', (req, res) => {
    const { title } = req.body;
    return todoFunction.addTodo({ title, res });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    return todoFunction.deleteTodo({ id , res});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});