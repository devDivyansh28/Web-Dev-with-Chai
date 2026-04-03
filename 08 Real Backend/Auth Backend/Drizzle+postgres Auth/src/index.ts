import {createServer} from "node:http"
import {createApplication} from "./app/index.js"




async function main(){
    try {
        const server = createServer(createApplication())
        const PORT = 5000
        server.listen(PORT,()=>{
            console.log(`Server is up on ${PORT}`)
        })
    } catch (error) {
        console.log("Error in starting Server");
        throw error;
    }
}

main()
