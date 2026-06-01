const todos = [];

let nextId = 1;
import { logger } from "./logger/index.js";
export const todoFunction = {

    addTodo : ({title , res}) =>{
            logger.info(`Attempting to add todo with title: ${title}`);
         if(!title){
            return res.status(400).json({error: "Title is required"});
         }
         todos.push({ id : nextId++ , title , createdAt : new Date() , status : "pending"});
         console.log("Current Todos: ", todos);
         return res.status(201).json({message: `Todo added successfully with id ${nextId - 1} `});
    }
    ,
     deleteTodo : ({id , res}) =>{
        const index = todos.findIndex(todo => todo.id === parseInt(id));
        logger.info(`Attempting to delete todo with id ${id}`);
        if(index === -1){
            return res.status(404).json({error: "Todo not found"});
        }
        todos.splice(index, 1);
        console.log("Current Todos: ", todos);
        logger.log({ level: "info", message: `Todo with id ${id} deleted successfully` });

        return res.status(200).json({message: `Todo deleted successfully with id ${id}`});
    }
}

