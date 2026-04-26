import http from 'node:http';
import path from 'node:path';

import express from 'express';
import {Server} from 'socket.io';
import {publisher , subscriber , redis} from './redis-connection.js'
import { channel } from 'node:diagnostics_channel';
const CHECKBOX_SIZE = 100 ;

const CHECKBOX_STATE_KEY = 'checkbox-state'



async function main() {
  const PORT = process.env.PORT ?? 8000;

  // Server Part
  const app = express();
  const server = http.createServer(app);
  const io = new Server();
  io.attach(server);

  await subscriber.subscribe("internal-server:checkbox:change");

//   subscriber.on("message", (channel, message) => {
//     if (channel === "internal-server:checkbox:change") {
//       const { index, checked } = JSON.parse(message);

//       io.emit("server:checkbox:change", { index, checked });
//     }
//   });

  const rateLimitingHashMap = new Map();

  subscriber.on("message", async (channel, message) => {

    if (channel === "internal-server:checkbox:change") {
      const { index, checked } = JSON.parse(message);

      const remoteData = await getState();
      remoteData[index] = checked;
      await setState(remoteData);
      io.emit("server:checkbox:change", { index, checked });
    }
  });


   async function getState(){
     const existingState = await redis.get(CHECKBOX_STATE_KEY);
     const remoteData = JSON.parse(existingState);
     return remoteData;
   }

   async function setState(remoteData){
     await redis.set(CHECKBOX_STATE_KEY, JSON.stringify(remoteData));
   }
  // // Sockt IO Handlers
  // io.on('connection',(socket)=>{
  //     console.log("Socket Connected" , socket.id);

  //     socket.on('client:checkbox:change', async (data)=>{

  //      const existingState = await redis.get(CHECKBOX_STATE_KEY)

  //      if(existingState){
  //         const remoteData =  JSON.parse(existingState);
  //         remoteData[data.index] = data.checked;
  //         redis.set(CHECKBOX_STATE_KEY , JSON.stringify(remoteData))
  //      } else{
  //           await redis.set(CHECKBOX_STATE_KEY , JSON.stringify(new Array(CHECKBOX_SIZE).fill(false)))
  //      }

  //     console.log(`${socket.id} : make a change`, data);

  //     await publisher.publish('internal-server:checkbox:change', JSON.stringify(data))
  //     })
  // })

  // Sockt IO Handlers
  io.on("connection", (socket) => {
    console.log("Socket Connected", socket.id);

    socket.on("client:checkbox:change", async (data) => {
     

    const lastOperationTime = await redis.get(`rate-limit-${socket.id}`);
    // const lastOperaitonTime = rateLimitingHashMap.get(socket.id);
    if(lastOperaitonTime){
          const timeElapsed = Date.now()-lastOperaitonTime;
          if(timeElapsed < 5.5 *1000){
            socket.emit('server:error',{error : 'Please Wait'})
            return;
          }
    }
    await redis.set(`rate-limit-${socket.id}`, Date.now());
    //   const existingState = await redis.get(CHECKBOX_STATE_KEY);

    //   if (existingState) {
    //     const remoteData = JSON.parse(existingState);
    //     remoteData[data.index] = data.checked;
    //     redis.set(CHECKBOX_STATE_KEY, JSON.stringify(remoteData));
    //   } else {
    //     await redis.set(
    //       CHECKBOX_STATE_KEY,
    //       JSON.stringify(new Array(CHECKBOX_SIZE).fill(false)),
    //     );
    //   }

      console.log(`${socket.id} : make a change`, data);

      await publisher.publish(
        "internal-server:checkbox:change",
        JSON.stringify(data),
      );
    });
  });

  // Expresss
  app.use(express.static(path.resolve("./public")));
  app.get("/health", (req, res) => {
    res.json({ helath: "ok" });
  });

  // app.get('/checkboxes',async(req,res)=>{

  //     const existingState = await redis.get(CHECKBOX_STATE_KEY);
  //     if(existingState){
  //         const remoteData = JSON.parse(existingState);
  //         return res.json({checkboxes : remoteData})
  //     }

  //     return res.json({ checkboxes: new Array(CHECKBOX_SIZE).fill(false) });

  // })

  app.get("/checkboxes", async (req, res) => {
    try {
      const remoteData = await getState();

      if (remoteData) {
        return res.json({ checkboxes: remoteData });
      }
      
      const initial = new Array(CHECKBOX_SIZE).fill(false);
      await setState(initial);
      return res.json({ checkboxes: initial });
    } catch (err) {
      console.error(err);

      // fallback
      return res.json({
        checkboxes: new Array(CHECKBOX_SIZE).fill(false),
      });
    }
  });

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

main();