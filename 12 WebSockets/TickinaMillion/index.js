import http from 'node:http';
import path from 'node:path';

import express from 'express';
import {Server} from 'socket.io';
import {publisher , subscriber , redis} from './redis-connection.js'
import { channel } from 'node:diagnostics_channel';
const CHECKBOX_SIZE = 100 ;

const CHECKBOX_STATE_KEY = 'checkbox-state'



async function main(){
    const PORT = process.env.PORT ?? 8000;

    // Server Part
    const app = express();
    const server = http.createServer(app);
    const io = new Server();
    io.attach(server);

    await subscriber.subscribe('internal-server:checkbox:change');

    subscriber.on('message',(channel , message)=>{
        if(channel==='internal-server:checkbox:change'){
            const {index , checked} = JSON.parse(message);

            io.emit('server:checkbox:change', {index , checked});
        }
    })

    // Sockt IO Handlers
    io.on('connection',(socket)=>{
        console.log("Socket Connected" , socket.id);

        socket.on('client:checkbox:change', async (data)=>{

         const existingState = await redis.get(CHECKBOX_STATE_KEY)

         if(existingState){
            const remoteData =  JSON.parse(existingState);
            remoteData[data.index] = data.checked;
            redis.set(CHECKBOX_STATE_KEY , JSON.stringify(remoteData))
         } else{
              await redis.set(CHECKBOX_STATE_KEY , JSON.stringify(new Array(CHECKBOX_SIZE).fill(false)))
         }


        console.log(`${socket.id} : make a change`, data);
        
        await publisher.publish('internal-server:checkbox:change', JSON.stringify(data))
        })
    })


    // Expresss
    app.use(express.static(path.resolve('./public')));
    app.get('/health',(req,res)=>{
        res.json({helath : "ok"});
    })

    app.get('/checkboxes',async(req,res)=>{

        const existingState = await redis.get(CHECKBOX_STATE_KEY);
        if(existingState){
            const remoteData = JSON.parse(existingState);
            return res.json({checkboxes : remoteData})
        }

        return res.json({ checkboxes: new Array(CHECKBOX_SIZE).fill(false) });

    })

    server.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
    })
}

main();