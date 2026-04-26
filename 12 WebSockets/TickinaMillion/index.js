import http from 'node:http';
import path from 'node:path';

import express from 'express';
import {Server} from 'socket.io';

async function main(){
    const PORT = process.env.PORT ?? 8000;

    // Server Part
    const app = express();
    const server = http.createServer(app);
    const io = new Server();
    io.attach(server);

    // Sockt IO Handlers
    io.on('connection',(socket)=>{
        console.log("Socket Connected" , socket.id);

        socket.on('client:checkbox:change',(data)=>{
         console.log(`${socket.id} : make a change`, data);
         io.emit('server:checkbox:change',data);
        })
    })


    // Expresss
    app.use(express.static(path.resolve('./public')));
    app.get('/health',(req,res)=>{
        res.json({helath : "ok"});
    })

    server.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}

main();