import express from 'express';
import http from 'node:http';
import path from 'node:path';
import {Server} from 'socket.io'



function main(){
    const app = express();
    app.use(express.static(path.resolve('./public')));

    const server = http.createServer(app);

    const io = new Server();
    io.attach(server);

    io.on('connection',(socket)=>{
        console.log('new socket connected')
    })

    server.listen(9000,()=>{
        console.log('server is up and running on port 9000');
    })

}

main();
