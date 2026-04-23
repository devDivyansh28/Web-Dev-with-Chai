import http from 'node:http'
import {Server} from 'socket.io'
import path from 'node:path';
import express from 'express';

async function main(){
    const app = express();
    app.use(express.static(path.resolve('./public')));

    const server = http.createServer(app);

    const io = new Server();
    io.attach(server);

    io.on('connection',(socket)=>{
        console.log('A new connection established with id: ',socket.id);
        socket.on('user:message',(data)=>{
            console.log(data);
            socket.broadcast.emit('server:message',data);
        })
        

    })

    server.listen(9000,()=>{
        console.log('HTTP server is running on PORT 9000');
    });
    
}

main();